# Dahua VTO on Home Assistant

This is my personal setup for using the Dahua VTO doorbell on Home Assistant.

## Goals

- No cloud services (no Dahua app)
- No VTH (indoor station)
- No communication over SIP
- Use Home Assistant for notifications
- Use Home Assistant for 2-way audio communication (accepting the call, talking to the visitor)
- Use Frigate for object detection of the doorbell camera
- Use Frigate for recording of the doorbell camera

While my own setup is working fine, this guide is work in progress, but I plan to explain every bit of it (even if just to myself).

## Why not SIP?

I was using a fully SIP setup before, using Asterisk and the [SIP card](https://github.com/TECH7Fox/sip-hass-card). I decided to move away because:

1. Asterisk is too complicated to manage. I don't want to deal with it.
2. I could not find a nice way to make it beautiful in my dashboard. It always felt out of place.
3. Answering the doorbell when outside home would require to open UDP ports in my router, which I don't want to do.

## Caveats

I could not yet get rid of Asterisk. Since I am not using a VTH, I still need Asterisk so that the doorbell can attempt to call a SIP extension.

And only in such case the button pressed event will be detected.

So, right now, until I find a better solution, I am running Asterisk just to create a dummy extension for the doorbell to call.

## Components

- Dahua VTO Doorbell VTO2202F-P-S2
- Home Assistant server
- [go2rtc](https://github.com/AlexxIT/go2rtc) for 2-way audio communication
- [Asterisk add-on](https://github.com/TECH7Fox/asterisk-hass-addons) so that the button pressed event can be captured
- [Home Assistant Dahua integration](https://github.com/rroller/dahua) to capture the button pressed event, cancel the call after the button is pressed, and unlock the door.
- Frigate server for object detection and recording
- Fully Kiosk Browser on a tablet for the doorbell interface
- [Frigate Card](https://github.com/dermotduffy/frigate-hass-card/) for 2-way audio communication within the Home Assistant dashboard (currently using [305a2db](https://github.com/dermotduffy/frigate-hass-card/tree/305a2db573d16bb7a91da65e7792b116b12a33b8))
- [layout-card](https://github.com/thomasloven/lovelace-layout-card/) to allow the doorbell dashboard to use full width of my tablet screen in vertical orientation, while still displaying other larger displays in horizontal orientation nicely.
- [Frigate Home Assistant integration](https://github.com/blakeblackshear/frigate-hass-integration), which allows the Frigate Card to communicate with go2rtc within Frigate without needing external exposure of the go2rtc server.
