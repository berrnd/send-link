-----

<div align="center">
<h1>Send Link</h1>
<h2>Send links via customizable context menu entries as <code>GET</code> requests (<code>mailto:</code> is also supported) in Firefox.</h2>
<em><h4>This is a hobby project by <a href="https://berrnd.de">Bernd Bestel</a></h4></em>
</div>

-----

## Features / Motivation

I often want to forward links to different, most of the time self-hosted, services while browsing the web (for example, post a link of a YouTube video to my TV to watch it later). So I searched for an Add-on to handle this, found nothing, so here is one.

### What it does

It will add entries to the context menu of links on all websites based on the provide configuration (see the Add-on options page).

Clicking such an entry will execute a `GET` request to the configured URL while replacing `%%u` with the clicked URL (if the URL starts with `http`).

URLs starting with `mailto` will be just opened, so probably your default mail program will compose a new mail.

### Configuration

URLs, separated by line break, `%%u` is the placeholder for the clicked URL. Everything before a `|` (pipe) will be used as the context menu label.

Example:
```
Entry1|https://example.com?url=%%u
Entry2|https://example.com?url=%%u
Entry3|mailto:me@example.com?subject=Forwarded link&body=%%u
```

## Questions / Help / Bug Reports / Feature Requests

Please use the [Issue Tracker](https://github.com/berrnd/send-link/issues/new/choose) for any requests.

## How to install

Install directly from AMO: https://addons.mozilla.org/firefox/addon/send-link

Or download the [latest release](https://github.com/berrnd/send-link/releases/latest) (as `.xpi`) and install it manually (not recommended, you will get no automatic updates)

## Contributing / Say Thanks

Any help is welcome, feel free to contribute anything which comes to your mind or see [https://berrnd.de/say-thanks](https://berrnd.de/say-thanks?project=SendLink) if you just want to say thanks.

## Screenshots

![overview](https://github.com/berrnd/send-link/raw/master/.github/publication_assets/overview.png "overview")

![settings](https://github.com/berrnd/send-link/raw/master/.github/publication_assets/settings.png "settings")

## Roadmap

There is none. The progress of a specific bug/enhancement is always tracked in the corresponding issue, at least by commit comment references.

## License

The MIT License (MIT)
