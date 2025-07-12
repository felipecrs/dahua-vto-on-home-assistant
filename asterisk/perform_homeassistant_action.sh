#!/usr/bin/env bashio

set -euo pipefail

action="${1?}"
shift
action_domain="${action%.*}"
action_name="${action#*.}"
unset action

body=$(bashio::var.json "${@}")

exec curl --fail-with-body -sS -X POST \
  -H "Authorization: Bearer ${SUPERVISOR_TOKEN}" \
  -H "Content-Type: application/json" \
  -d "${body}" \
  "http://supervisor/core/api/services/${action_domain}/${action_name}"
