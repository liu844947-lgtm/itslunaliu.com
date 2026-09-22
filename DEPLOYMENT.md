# Deployment

The production site is the ocean portfolio in `site/ocean/`. The live URLs are:

- https://itslunaliu.com
- https://www.itslunaliu.com

## Automatic deployment

Pushing a commit to the `master` branch that changes `ocean/**` starts `.github/workflows/deploy-ocean.yml`. GitHub Actions packages the ocean theme and uploads it to the Alibaba Cloud Linux ECS at `47.94.99.190` over SSH. The server validates the archive, atomically promotes it to `/var/www/itslunaliu.com`, reloads Nginx, and checks the local HTTPS response before the workflow verifies the public URL.

The workflow uses these encrypted GitHub repository secrets:

- `ECS_HOST`
- `ECS_USER`
- `ECS_SSH_PRIVATE_KEY`
- `ECS_KNOWN_HOSTS`

Never commit a `.pem` file, private key, password, or token. Agents must not edit `/var/www/itslunaliu.com` directly during ordinary work.

## Rollback

Each successful promotion moves the previous release to `/var/www/itslunaliu.com.previous-<timestamp>`. Rollback is an ECS maintenance operation: restore the desired backup, run `nginx -t`, and reload Nginx.

## Local checks

From this directory, run:

```bash
npm test
node ocean/check.mjs
```

The current production entry point is `ocean/index.html`, not the legacy `site/index.html`.
