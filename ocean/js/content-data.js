(function () {
  'use strict';

  window.OceanContent = {
    profile: {
      name: '刘颖',
      school: '安徽建筑大学',
      target: 'AI 产品岗位',
      intro: '我叫刘颖，本科就读于安徽建筑大学，正在应聘 AI 产品岗位。我在两段 AI 产品实习中参与了 B 端智能体、销售工作台和 AI 拍照搜题项目，也独立做出可演示的 AI 工具，关注从用户问题、产品方案到上线验证的完整闭环。',
      strengths: [
        'AI 应用：使用 Codex、Cursor 等工具辅助完成 7 套原型，并独立用 Vibe Coding 完成多个 AI 工具的开发与部署。',
        '产品能力：参与 B 端定制化项目的用户调研、需求拆解、竞品分析、原型设计、Prompt 工程和效果测试。',
        '设计能力：具备素描、写生和基础 UI 设计训练，能够使用 Figma 制作高保真原型；曾在 Fiverr 为 Twitch 游戏主播定制表情包。',
        '技术与方法：熟练使用 Figma，掌握 SQL、Python，熟悉 RAG、Agent 和 Prompt 工程。',
        '在校项目：作为负责人完成省级大创项目，搭建 GIS + AHP 选址评估模型，积累数据分析与多维度建模经验。'
      ],
      interests: ['素描与写生', '游戏主播定制表情包', '小红书文创设计', '无属性设计接单'],
      photo: 'assets/profile-photo.jpg'
    },
    internships: [
      {
        id: '01',
        company: '北京数解科技有限公司',
        role: 'AI 产品实习生',
        period: '2026.06 – 2026.09',
        summary: '参与博创园、留学销售 Agent、boboli 智能耳机、高校辅导员智能体等多条 B 端 AI 产品线，负责需求拆解、原型设计与前端落地跟进，累计完成 7 套原型，深度参与博创园直至上线。',
        contributions: [
          '将会议与客户沟通转译为可开发规格：角色权限、主路径、状态流转与本期范围。',
          '深度参与博创园专家端产品设计与 AI 辅助评审，并协助赛事工单与创业者端测试闭环。',
          '参与来华留学销售 Agent 控制台原型、数据迁移规则与 Mr.Su 风格蒸馏。'
        ]
      },
      {
        id: '02',
        company: '快乐学教育集团',
        role: 'AI 产品助理',
        period: '2025.12 – 2026.01',
        summary: '参与 1 对 1 机构内嵌 AI 拍照搜题 MVP 从 0→1：用户调研、PRD、AI 策略、Prompt、上线评测与数据监控，推动初二数学场景上线，累计 400+ 用户使用。',
        contributions: [
          '开展 8 场用户访谈与 102 份问卷，识别求助链路、拍搜心理负担与设备可得性，锁定 MVP 范围。',
          '设计「大模型解题 + 自有题库校验」双引擎，并在 Coze 搭建题干抽取、解题、比对、格式修正与 Follow-up 工作流。',
          '搭建评测：100 条样本经 DeepSeek / Qwen 交叉评分与教师终审，合格率 98%；设计埋点与灰度支撑迭代。'
        ]
      }
    ],
    projects: [
      {
        id: '01',
        slug: 'bochuangyuan',
        title: '博创园',
        shortTitle: '博创园',
        englishTitle: '',
        kind: 'internship',
        pill: '',
        highlight: '面向创业群体，搭建覆盖报名、专家评审与后台管理的一体化赛事系统',
        tags: ['B 端工作台', 'AI 辅助评审', '原型设计', '赛事工单', '可体验'],
        summary: '从创业者报名到专家评审和后台维护的一体化创业陪伴系统。',
        cover: '',
        coverLabel: '专家评审端 · PC / 移动双端样机',
        heroBg: 'assets/projects/bochuangyuan/hero-waterfall-bg.png',
        hidePill: true,
        hideEnglish: true,
        hideFooter: true,
        galleryTextOnly: true,
        devices: {
          laptop: 'assets/projects/bochuangyuan/device-laptop.png',
          laptopAlt: '评审端项目详情 · 桌面端',
          phone: 'assets/projects/bochuangyuan/device-phone.png',
          phoneAlt: '评审端项目详情 · 移动端'
        },
        story: '研博创业青年填报商业计划书时，原流程耗时长、操作繁琐且难外部导入；专家评审缺少 AI 辅助，评分维度与赛事节点也不清晰。我将报名、预审、专家分配、多轮评审到入选公示等 8 大节点收成赛事工单，并独立负责专家端 PC / 移动产品设计与 AI 辅助评审机制，让评审主路径和异常分支都能落到可验收的交互与 Prompt 规则上。',
        links: [
          { label: '后台管理端', href: 'https://bcyht.sudoxai.com' },
          { label: '创业端', href: 'https://bcycy.sudoxai.com' },
          { label: '评审端', href: 'https://bcyps.sudoxai.com' }
        ],
        gallery: [
          { title: '专家评审工作台', caption: '覆盖工作台、评审列表、评审工作台、消息、个人中心与组员管理。' },
          { title: '移动端评审详情', caption: '申报书阅读、明审模式与打分批注入口，适配专家移动场景。' },
          { title: '赛事工单 8 节点', caption: '重构专家库与赛事节点，统一角色权限与全生命周期状态流转。' },
          { title: '三端体验入口', caption: '后台 / 创业端 / 评审端均可在线体验（口令面试提供）。' }
        ],
        result: '专家端完成 PC + 移动端产品设计并跟进至上线；AI 评审机制保留专家终裁。创业者端与后台侧通过测试与工单重构形成可运营闭环。',
        iteration: '后续可加强评审质量评测集、Badcase 回归，以及专家端移动场景下的效率指标监控。',
        owned: ['负责专家端 PC + 移动端产品设计，覆盖工作台、评审列表、评审工作台、消息、个人中心和组员管理。', '负责 AI 辅助评审机制及提示词设计，保留专家判断、追问与人工兜底。'],
        assisted: ['参与创业者端核心流程测试与问题闭环。', '协助梳理后台专家库与赛事工单统一模块。'],
        background: '研究生、博士生创业青年填写商业计划书时，原流程时间长、操作繁琐且不支持外部导入；专家评审缺少 AI 辅助，评分维度和赛事节点管理也不够系统。',
        action: ['围绕创业者报名、专家评审和后台维护，组织一体化的产品流程。', '将预审、专家分配、多轮评审、入选公示等八个赛事节点整理进赛事工单模块。']
      },
      {
        id: '02',
        slug: 'liuxue-agent',
        title: '来华留学销售 AI Agent',
        shortTitle: '来华留学',
        englishTitle: 'LIUXUE AGENT',
        kind: 'internship',
        pill: '实习 · 数解',
        highlight: '把多平台咨询收进统一销售工作台，让 Agent 有人设语气，但不编造价格与政策。',
        tags: ['销售 Agent', '工作台', '风格蒸馏', '数据迁移', '事实约束'],
        summary: '连接多平台客户信息与销售工作台，支持符合个人品牌语气的 AI 客服工作流。',
        cover: '',
        coverLabel: '销售 Agent 控制台 · 主视觉待补截图',
        story: '客户通过多个社交平台咨询来华留学，外部客服平台能聚合会话，却缺少符合顾问个人品牌语气、且受业务事实约束的 AI 客服能力。我梳理销售、主管、管理员、Mr.Su 等角色边界，把多角色流程收成两组主路径，完成销售 Agent 控制台原型，并参与历史数据迁移与风格蒸馏：用 Persona、场景 Playbook、禁绝对承诺和转人工规则，约束 Agent 不编造价格与政策。',
        links: [],
        gallery: [
          { title: '销售 Agent 控制台', caption: '工作台、领取式任务中心、会话中心、客户信息、定时唤醒、通知与主管看板。', src: '', note: '截图待补' },
          { title: '角色与主路径', caption: '多角色操作边界整合为两组主路径，降低系统复杂度。', src: '', note: '说明卡' },
          { title: '风格蒸馏与安全边界', caption: '沉淀 Mr.Su 人设、禁用绝对化承诺、转人工规则与回归用例。', src: '', note: '说明卡' },
          { title: '数据迁移', caption: '字段映射、渠道归一、异常处理与分批对账，完成历史数据迁移验证。', src: '', note: '说明卡' }
        ],
        result: '完成销售 Agent 控制台原型设计，并完成风格蒸馏与历史数据迁移验证，使 Agent 表达可控、事实可兜底。',
        iteration: '后续可补会话质量评测、转人工率与承诺违规抽检，并把回归用例固化进上线检查。',
        owned: ['负责销售 Agent 控制台原型设计。', '参与数据迁移规则与对账口径设计。', '基于真实对话完成 Mr.Su 风格蒸馏与安全约束。'],
        assisted: [],
        background: '客户通过多个社交平台获得来华留学咨询，外部平台可聚合客户信息，但缺少符合个人品牌语气且受事实约束的 AI 客服能力。',
        action: ['梳理多角色边界并整合为两组主路径。', '完成控制台原型，并推进数据迁移与风格蒸馏。']
      },
      {
        id: '03',
        slug: 'loom-detail',
        title: '电商详情页生成',
        shortTitle: '电商详情页',
        englishTitle: 'LOOM',
        kind: 'personal',
        pill: '个人项目',
        highlight: '用生成式流程把商品信息快速变成可浏览的详情页表达，缩短从素材到页面的制作路径。',
        tags: ['个人项目', '生成式应用', '可体验', 'Vibe Coding'],
        summary: '个人项目：在线生成电商详情页，支持登录体验完整流程。',
        cover: '',
        coverLabel: 'Loom · 电商详情页生成',
        story: '电商详情页制作往往重复且耗时。我用 Vibe Coding 做出可在线体验的详情页生成工具：输入商品相关信息后生成详情表达，验证「生成—预览—迭代」是否能成为可用的个人生产力工具。当前以可演示 Web 产品为主，细节能力仍在迭代。',
        links: [
          { label: '在线体验', href: 'https://www.loom.sudoxai.com/' }
        ],
        gallery: [
          { title: '生成工作台', caption: '从输入到详情页预览的主路径（界面说明待你补一句具体输入项）。', src: '', note: '截图待补 · 可点链接体验' },
          { title: '详情页输出', caption: '生成结果可在线查看，便于对比与继续改写。', src: '', note: '截图待补' }
        ],
        result: '已部署可访问的 Web Demo，支持登录后完整体验生成流程。',
        iteration: '补充更清晰的输入模板、风格控件与失败兜底；完善作品集截图与前后对比。',
        owned: ['产品定义、交互与 Demo 部署。'],
        assisted: [],
        background: '详情页制作重复耗时，需要更快的生成与预览闭环。',
        action: ['搭建可在线体验的详情页生成 Demo，并部署上线。']
      },
      {
        id: '04',
        slug: 'scoutai',
        title: 'ScoutAI 用户自调研系统',
        shortTitle: 'ScoutAI',
        englishTitle: 'SCOUTAI',
        kind: 'personal',
        pill: '个人项目',
        highlight: '把散落在多平台的用户声音，收成带原话证据、经得起追问的研究报告。',
        tags: ['个人项目', '舆情调研', '证据链', 'Agent', '可体验'],
        summary: '个人项目：输入研究问题，跨平台抓取用户反馈，输出带原话证据的结构化报告。',
        cover: 'assets/projects/scoutai/scoutai-macbook-base.png',
        coverLabel: 'ScoutAI 网页端 Demo',
        heroBg: '',
        story: '用户反馈分散在 Twitter、Reddit、B 站、YouTube 等平台，手工抓取清洗常耗数天，报告又常缺少可追溯原话。ScoutAI 从研究问题出发，自动生成中英关键词、跨平台采集与清洗，并输出带样本引用的结构化报告；支持基于证据继续追问。暑假作品，部分平台爬取可能已失效，建议以录屏与现存页面为准。',
        links: [
          { label: '在线体验', href: 'https://www.scoutai.sudoxai.com/' }
        ],
        gallery: [
          { title: '新建调研', caption: '从研究问题启动一次完整调研任务。', src: 'assets/projects/scoutai/scoutai-new-research.png' },
          { title: '关键词生成', caption: '提取短词、补充人群并扩展同义词，覆盖中英检索。', src: 'assets/projects/scoutai/scoutai-keywords.png' },
          { title: '报告详情', caption: '核心结论挂接跨平台原话，便于汇报时追问证据。', src: 'assets/projects/scoutai/scoutai-report-detail.png' },
          { title: '报告结构', caption: '概况、结论、情绪、画像、机会建议与样本附录。', src: 'assets/projects/scoutai/scoutai-report-structure.png' }
        ],
        result: '完成网页端 Demo：关键词生成、跨平台抓取、清洗与结构化报告输出；具备可溯源引用与追问能力。',
        iteration: '抓取稳定性（监控、降级与备用关键词）优先；再增强基于证据的 RAG 追问。部分平台可能暂时抓不到，展示以录屏补充。',
        owned: ['产品定义、AI 交互、界面设计与 Demo 落地。'],
        assisted: [],
        background: '调研碎片化、手工成本高、结论不可追溯。',
        action: ['搭建从问题到带证据报告的自调研 Agent Demo。']
      },
      {
        id: '05',
        slug: 'travel-agent',
        title: '小迹 · AI 旅行 Agent',
        shortTitle: '旅游 Agent',
        englishTitle: 'TRAVEL AGENT',
        kind: 'personal',
        pill: '个人项目',
        highlight: '把模糊的旅行意愿澄清成可调整的个性化路线，并用地图验证可行性。',
        tags: ['个人项目', '旅行 Agent', '需求澄清', 'Vibe Coding'],
        summary: '个人项目：帮助用户明确旅行需求、生成个性化路线，并通过地图验证与持续调整形成行程。',
        cover: 'assets/projects/shared/travel-route-detail.jpg',
        coverLabel: '旅行路线详情',
        story: '用户常常说不清旅行偏好，路线生成后又难验证是否可走。小迹旅行 Agent 从需求澄清开始，生成个性化行程，并提供地图与细节页帮助用户调整。该项目为暑假个人研究作品，已有一段时间未维护，作品集以界面截图与录屏展示为主。',
        links: [],
        gallery: [
          { title: '行程路线详情', caption: '在地图与卡片中查看生成后的路线结构。', src: 'assets/projects/shared/travel-route-detail.jpg' },
          { title: '产品首页', caption: '从首页进入需求澄清与行程生成。', src: 'assets/projects/shared/travel-home.jpg' }
        ],
        result: '完成可演示的旅行 Agent Demo，覆盖需求澄清、路线生成与详情查看。',
        iteration: '久未维护；后续若重启，优先修复数据源与地图链路，并补录最新演示视频。',
        owned: ['产品定义、交互与 Demo 实现。'],
        assisted: [],
        background: '旅行需求模糊，生成结果难验证。',
        action: ['搭建需求澄清到路线详情的 Agent 流程 Demo。']
      }
    ]
  };
}());
