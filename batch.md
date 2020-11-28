# Trigger workflow

## modify CI pipeline

```yaml
on:
  repository_dispatch:
    types: 
      - webhook-one
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
