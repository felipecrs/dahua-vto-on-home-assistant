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

## Components

- Dahua VTO Doorbell VTO2202F-P-S2
- Home Assistant server
- [go2rtc](https://github.com/AlexxIT/go2rtc) for 2-way audio communication
- [Asterisk add-on](https://github.com/TECH7Fox/asterisk-hass-addons) so that the button pressed event can be captured
- [Home Assistant Dahua integration](https://github.com/rroller/dahua) to capture the button pressed event, cancel the call after the button is pressed, and unlock the door.
- Frigate server for object detection and recording
- Fully Kiosk Browser on a tablet for the doorbell interface
