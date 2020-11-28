# Trigger workflow

## modify CI pipeline

### add trigger

add a [**repository_dispatch**](https://docs.github.com/en/free-pro-team@latest/actions/reference/events-that-trigger-workflows#external-events-repository_dispatch)  event to trigger the flow.

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

>note:the event_type value is the name previously defined under [trigger/types](#add-trigger)

see [here](https://blog.s1h.org/github-actions-webhook/)

## Useful links

- [SWA Build and deploy]( https://aka.ms/swaworkflowconfig)
