# Agent Instructions

## Production website

- Production URLs: https://itslunaliu.com and https://www.itslunaliu.com
- Production source: ocean/ in this repository
- Production branch: master
- Deployment workflow: .github/workflows/deploy-ocean.yml
- ECS: Alibaba Cloud Linux 3 at 47.94.99.190
- Web root: /var/www/itslunaliu.com

## Deployment contract

Pushing changes under ocean/** to master starts the GitHub Actions deployment. A code change is live only after that workflow succeeds. The workflow publishes an archive rather than using git clone because the ECS cannot reliably reach GitHub.

Do not deploy the legacy repository-root index.html; the live portfolio entry point is ocean/index.html. Do not directly edit the ECS web root during ordinary development. Never commit a .pem file, private key, password, or token.

See DEPLOYMENT.md for secrets, rollback, and verification details.
