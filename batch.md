# Trigger workflow

## modify CI pipeline

### add trigger

```yaml
on:
  repository_dispatch:
    types: 
      - webhook-one
```

### add event to condition

```yaml
jobs:
  build_and_deploy_job:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed') || ${{ github.event.action == 'webhook-one' }}
```

## create PAT

create a [PAT](https://docs.github.com/en/free-pro-team@latest/developers/apps/creating-an-oauth-app) according to the docs

## invoke trigger

```bash
curl -H "Authorization: token {PAT}" \
    --request POST \
    --data '{"event_type": "webhook-one"}' \
    https://api.github.com/repos/hanneskoeh/gatsby-test/dispatches
```
