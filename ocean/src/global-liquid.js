import * as THREE from 'three';
import { createIcons, ArrowDownRight, ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide';

createIcons({ icons: { ArrowDownRight, ArrowUpRight, ArrowLeft, ArrowRight } });
const targets = [...document.querySelectorAll('.image-slot, .sticker-band, .detail-placeholder')];
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const fine = matchMedia('(hover: hover) and (pointer: fine)');
const paused = () => reduced.matches || document.documentElement.dataset.motion === 'paused';
let renderer;
try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); }
catch { /* Solid DOM surfaces remain the non-WebGL fallback. */ }

if (renderer && targets.length) {
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  renderer.domElement.className = 'global-liquid';
  renderer.domElement.setAttribute('aria-hidden', 'true');
  document.body.prepend(renderer.domElement);
  const surfaces = targets.map(element => ({
    element, color: new THREE.Color(getComputedStyle(element).backgroundColor).convertLinearToSRGB(),
    lean: new THREE.Vector2(), swell: 0,
  }));
  const uniforms = {
    resolution: { value: new THREE.Vector2() },
    boxes: { value: Array.from({length: 8}, () => new THREE.Vector4()) },
    colors: { value: Array.from({length: 8}, () => new THREE.Vector3()) },
    count: { value: 0 }, mouse: { value: new THREE.Vector4() }, time: { value: 0 },
  };
  const material = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, uniforms,
    vertexShader: 'varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}',
    fragmentShader: `
      precision highp float;
      varying vec2 vUv;
      uniform vec2 resolution;
      uniform vec4 boxes[8];
      uniform vec3 colors[8];
      uniform int count;
      uniform vec4 mouse;
      uniform float time;
      float box(vec2 p, vec2 halfSize) {
        vec2 q=abs(p)-halfSize+2.;
        return length(max(q,0.))+min(max(q.x,q.y),0.)-2.;
      }
      void main() {
        vec2 p=vUv*resolution;
        float distance=1e6;
        vec3 color=vec3(0.);
        for(int i=0;i<8;i++) {
          if(i>=count) break;
          float d=box(p-boxes[i].xy,boxes[i].zw);
          if(d<distance) { distance=d; color=colors[i]; }
        }
        // Ice-works-showcase capillary wake, in the same CSS-pixel space.
        float toMouse=length(p-mouse.xy);
        distance+=sin(toMouse*.05-time*7.)*mouse.w*4.*exp(-toMouse/260.);
        float aa=clamp(fwidth(distance),.5,2.);
        gl_FragColor=vec4(color,1.-smoothstep(-aa,aa,distance));
      }
    `,
  });
  const scene = new THREE.Scene();
  const camera = new THREE.Camera();
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
  scene.add(mesh);
  const pointer = new THREE.Vector2(-1000, -1000), cursor = pointer.clone();
  let width = innerWidth, height = innerHeight, wake = 0, amount = 0;
  let frame = 0, previous = performance.now(), activeUntil = 0, inside = false;
  function schedule(duration = 1800) {
    activeUntil = performance.now() + duration;
    if (!frame && !document.hidden) frame = requestAnimationFrame(draw);
  }
  function resize() {
    width = innerWidth; height = innerHeight;
    renderer.setSize(width, height);
    uniforms.resolution.value.set(width, height);
    schedule();
  }
  function draw(now) {
    frame = 0;
    const dt = Math.min(.05, (now - previous) / 1000);
    previous = now;
    const live = inside && fine.matches && !paused();
    const chase = k => 1 - Math.pow(1-k,dt*60);
    amount += ((live ? 1 : 0) - amount) * chase(.12);
    cursor.lerp(pointer, chase(.3));
    wake = Math.max(wake*Math.pow(.94,dt*60),Math.min(1,pointer.distanceTo(cursor)/(Math.max(dt,.001)*2600)));
    if (!paused()) uniforms.time.value += dt;
    uniforms.mouse.value.set(cursor.x,height-cursor.y,amount,paused()?0:wake*amount);
    let visible = 0;
    surfaces.forEach(surface => {
      const rect = surface.element.getBoundingClientRect();
      if (rect.bottom < -40 || rect.top > height+40 || !rect.width || !rect.height || visible >= 8) return;
      const cx=rect.left+rect.width/2, cy=rect.top+rect.height/2;
      const dx=cursor.x-cx, dy=cursor.y-cy;
      const reach=Math.max(rect.width,rect.height)*.9;
      const influence=live?Math.max(0,1-Math.hypot(dx,dy)/reach)*amount:0;
      const leanTarget=new THREE.Vector2(dx,dy).normalize().multiplyScalar(influence*10);
      surface.lean.lerp(leanTarget,chase(influence? .14:.06));
      surface.swell+=(influence*.025-surface.swell)*chase(.12);
      if(paused()){surface.lean.set(0,0);surface.swell=0;}
      uniforms.boxes.value[visible].set(cx+surface.lean.x,height-cy-surface.lean.y,rect.width*(1+surface.swell)/2,rect.height*(1+surface.swell)/2);
      uniforms.colors.value[visible].set(surface.color.r,surface.color.g,surface.color.b);
      visible++;
    });
    uniforms.count.value=visible;
    renderer.render(scene,camera);
    targets.forEach(element=>element.classList.add('liquid-ready'));
    if (!document.hidden && !paused() && now < activeUntil) frame=requestAnimationFrame(draw);
  }
  window.addEventListener('pointermove',event=>{
    if(event.pointerType==='touch')return;
    pointer.set(event.clientX,event.clientY);inside=true;schedule();
  },{passive:true});
  document.addEventListener('pointerleave',()=>{inside=false;schedule();});
  window.addEventListener('scroll',()=>{inside=false;schedule();},{passive:true});
  window.addEventListener('resize',resize,{passive:true});
  document.addEventListener('ocean:motionchange',()=>schedule());
  document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;}else schedule();});
  reduced.addEventListener('change',()=>schedule());
  new ResizeObserver(()=>schedule()).observe(document.body);
  renderer.domElement.addEventListener('webglcontextlost',event=>{
    event.preventDefault(); cancelAnimationFrame(frame);frame=0;
    targets.forEach(element=>element.classList.remove('liquid-ready'));
    renderer.domElement.hidden=true;
  });
  resize();
}
