#!/bin/bash
#
# This script fixes the VTO audio codecs before supplying the stream url to go2rtc.
#
# Examples:
#
#   ./fix_vto_codecs.sh rtsp://user:pass@192.168.1.40/cam/realmonitor?channel=1&subtype=0&unicast=true&proto=Onvif
#   ./fix_vto_codecs.sh rtsp://user:pass@192.168.1.40/cam/realmonitor?channel=1&subtype=1
#

set -euo pipefail

if [[ -n "${DEBUG:-}" ]]; then
  set -x
fi

readonly vto_stream_url="${1}"

vto_host_with_creds="${vto_stream_url#"rtsp://"}"
vto_host_with_creds="${vto_host_with_creds%%"/"*}"
readonly vto_host_with_creds

query="action=setConfig"
# PCMA: good for webrtc and 2-way audio
query+="&Encode[0].MainFormat[0].Audio.Compression=G.711A"
# AAC: good for Frigate
query+="&Encode[0].ExtraFormat[0].Audio.Compression=AAC"
readonly query

curl --fail --silent --show-error --digest --globoff \
  "http://${vto_host_with_creds}/cgi-bin/configManager.cgi?${query}" |
  grep -q OK

echo -n "${vto_stream_url}"
