# Admin-SDK-Element-Test

This is a basic complete example of how to add CMS Elements with the Shopware App-System.

## Setup

* Install dependencies of both servers via `make init`
* Start the handshake server with `make handshake`
* Start the Admin-SDK-Server with `make appserver`
* Check `registrationUrl` and `base-app-url` in `manifest.xml` if the mentioned domain fits your setup
* Run `bin/console app:refresh CustomElementTest` in platform
* Activate the app via`bin/console app:activate CustomElementTest`
* The `DailyMotion` CMS Element should now be visible
