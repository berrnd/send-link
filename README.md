# send-link
A Firefox extension to send links via customizable context-menu-entries as GET requests (MAILTO is also supported)

## Motivation
I often want to forward links to different, most of the time self-hosted, services while browsing the web (for example, post a link of a YouTube video to my TV to watch it later). So I searched for an extension to handle this, found nothing, so I created this.

## How to install
Install directly from AMO: https://addons.mozilla.org/de/firefox/addon/send-link
Or download the [latest release](https://github.com/berrnd/send-link/releases/latest) (as `.xpi`) and install it manually (not recommended, you will get no automatic updates)

## What it does
It will add a context menu entry for each service you configure in the context menu of links - clicking such an entry will execute a GET request to the configured URL while replacing `%%u` with the clicked URL, if the URL starts with `http` (see below or the extension configuration page).

URLs starting with `mailto` will be just opened - so probably your default mail program will compose a new mail.

## Configuration
URLs, separated by line break, `%%u` is the placeholder for the clicked URL. Everything before a `|` (pipe) will be used as the context menu label.

Example:
```
Entry1|https://example.com?url=%%u<br>
Entry2|https://example.com?url=%%u
Entry3|mailto:me@example.com?subject=Forwarded link&body=%%u
```

## License
The MIT License (MIT)
