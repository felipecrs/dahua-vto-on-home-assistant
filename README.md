# Dahua VTO on Home Assistant

This is my personal setup for using the Dahua VTO doorbell on Home Assistant.

## Demo

https://github.com/felipecrs/dahua-vto-on-home-assistant/assets/29582865/3aa5be77-995b-4858-91db-e60be104a70e

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

Another caveat is the need of Frigate. The Frigate Card has support for go2rtc running outside Frigate, but it will require you to expose your go2rtc to the internet (https://github.com/dermotduffy/frigate-hass-card/issues/1299). Theoretically it should work, but I never tried.

## Components

- Dahua VTO Doorbell VTO2202F-P-S2
- Home Assistant server
- [Asterisk add-on](https://github.com/TECH7Fox/asterisk-hass-addons) so that the button pressed event can be captured (refs https://github.com/rroller/dahua/issues/359), and also so that the doorbell can announce _Calling now_ when the button is pressed.
- [Home Assistant Dahua integration](https://github.com/rroller/dahua) to capture the button pressed event, cancel the call after the button is pressed, and unlock the door.
- [Frigate](https://github.com/blakeblackshear/frigate) for object detection and recording
- [go2rtc](https://github.com/AlexxIT/go2rtc) for 2-way audio communication, running inside Frigate
- [Frigate Home Assistant integration](https://github.com/blakeblackshear/frigate-hass-integration), which allows the Frigate Card to communicate with go2rtc within Frigate without needing external exposure of the go2rtc server.
- [Frigate Card](https://github.com/dermotduffy/frigate-hass-card/) for 2-way audio communication within the Home Assistant dashboard (currently using [305a2db](https://github.com/dermotduffy/frigate-hass-card/tree/305a2db573d16bb7a91da65e7792b116b12a33b8))
- [Fully Kiosk Browser](https://www.fully-kiosk.com/) on a tablet for the doorbell interface
- [Fully Kiosk Browser Home Assistant official integration](https://www.home-assistant.io/integrations/fully_kiosk/)
- [layout-card](https://github.com/thomasloven/lovelace-layout-card/) to allow the doorbell dashboard to use full width of my tablet screen in vertical orientation, while still displaying other larger displays in horizontal orientation nicely.
- [Home Assistant companion app](https://companion.home-assistant.io/), to receive notifications when someone rings the doorbell
- [Notifications for Android TV Home Assistant integration](https://www.home-assistant.io/integrations/nfandroidtv/), to receive notifications on my TVs when someone rings the doorbell

## How to

This is not a step-by-step guide. This is just a reference for the specific configurations of each of the components above to make it work like in the demo.

### Configuring Asterisk

You need to [install the Asterisk add-on](https://github.com/TECH7Fox/asterisk-hass-addons/blob/main/asterisk/DOCS.md) and then add a PJSIP extension for the VTO. Also, you need a "virtual" number/extension for the VTO to call to. The VTO will later connect to Asterisk and when someone rings it, it will call such number.

The relevant Asterisk configuration files can be found at [`asterisk/custom`](./asterisk/custom/).

### Configuring the VTO

The VTO SIP server configuration should be as following:

![VTO SIP server configuration](./vto/sip-server-configuration.png)

Also, this is how I configure my video stream in the VTO:

![VTO video configuration](./vto/video-configuration.png)

It works well for me. I use the sub stream to record in Frigate.

### Configuring Frigate

Nothing outside of the usual. You can check [Frigate docs](https://docs.frigate.video/).

The relevant section of my `frigate.yaml` can be [here](./frigate/frigate.yaml).

Make sure the [Frigate Home Assistant integration](https://docs.frigate.video/integrations/home-assistant) is also configured.

### Configuring go2rtc

go2rtc runs inside Frigate in this setup. The go2rtc configuration is included in the Frigate configuration. The important thing here is to use the [`fix_vto_codecs.sh`](./go2rtc/fix_vto_codecs.sh) script to `echo` your VTO RTSP URLs.

In my case, I added such script to `/config/scripts/fix_vto_codecs.sh`. Make sure it has execution permission with `chmod +x /config/scripts/fix_vto_codecs.sh`, otherwise go2rtc will not be able to execute it.

### Configuring the Frigate Card

As of now, you will need a custom release of the Frigate card because this setup uses features which were not released yet.

I am currently using the [305a2db](https://github.com/dermotduffy/frigate-hass-card/tree/305a2db573d16bb7a91da65e7792b116b12a33b8) git revision.

You will need to manually build and install it.

However, I did this and uploaded the Frigate Card files to [`www/custom/frigate-hass-card`](./www/custom/frigate-hass-card/). Hopefully it will make your life a life easier.

Instructions on how to install these files are [here](https://github.com/dermotduffy/frigate-hass-card?tab=readme-ov-file#advanced-users-manual-installation).

The code for my dashboard with the Frigate Card configured can be found [here](./home-assistant/dashboard/doorbell.yaml).

My dashboard is configured to use [layout-card](https://github.com/thomasloven/lovelace-layout-card/), but you are free to make it use other dashboard types.

### Configuring Fully Kiosk Browser

I configured [Fully Kiosk Browser](https://www.fully-kiosk.com/en/) several years ago in my tablet. I don't remember what exact settings I used. However, the important thing is to have the [Fully Kiosk Browser Home Assistant integration](https://www.home-assistant.io/integrations/fully_kiosk) configured, since it is used in the automations below.

### Configuring Home Assistant

Make sure to have the [Home Assistant Dahua integration](https://github.com/rroller/dahua) configured.

Then, everything is handled through Home Assistant automations.

I left a reference of my automations [here](./home-assistant/automations/).

You can manually pick all the ones you want, and then edit them to fit your needs.

The main one is [`doorbell-ringed.yaml`](./home-assistant/automations/doorbell-ringed.yaml), which starts when someone rings the VTO and performs the necessary actions like you saw in the demo video.

For example, the first action is to cancel the call in the VTO. This is important so that 2-way audio communication can work well with go2rtc and the Frigate Card.

You will need to [create an `input_boolean`](https://www.home-assistant.io/integrations/input_boolean/) as well. In my automations it is named `input_boolean.doorbell_calling`.

The integration also uses the [`ringtone.mp3`](./www/asterisk/ringtone.mp3) to emulate a call by playing it on the tablet. Make sure such file is in your `/config/www/asterisk/` folder.

I created notification groups for my mobile devices and for my TVs to simplify my automation. If you want to do the same, it's as simple as adding this to your Home Assistant `configuration.yaml`:

```yaml
notify:
  - name: all_phones
    platform: group
    services:
      - service: mobile_app_phone_a
      - service: mobile_app_phone_b
  - name: all_tvs
    platform: group
    services:
      - service: kitchen_tv
      - service: bedroom_tv
```
