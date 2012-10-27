# Random Shell Tools

These are small, simplish command-line utilities that I've put together over the years to help with irritating repetitive tasks that come up frequently while developing websites. 

They may or may not be usable or well-written.

They may or may not be sensible alternatives to some cherished command-line tool, web-based workflow or magic goat's-blood-powered ritual that you use to get through your day.

However, they work for me.

More will probably be added over time.

## The Tools

* `longurl [url]` - takes a URL from a URL-shortening service and attempts to dig up the original URL it references. This depends on having curl on your system.
* `ts` - a perl script for manipulating Unix timestamps. Mainly, it will convert any timestamp to human time, and more importantly provides an easy way to generate timestamps an arbitrary period in the past or future, with commands like "ts - 4 hours". Type "ts help" for more info.
* `fbtest` - a perl script for creating, deleting, reviewing and accessing Facebook API test users for your application key(s). This is probably the most useful of the bunch, but also needs refactoring to be less specific to my needs.

## Dependencies

* command-line `curl` (longurl and fbtest)
* perl5 (ts, fbtest)
* The `JSON` perl CPAN module - `libjson-perl` on debian-like unixes (fbtest)

## Installation

Barring the dependencies above, `longurl` and `ts` should nestle happily anywhere on your path and provide hours of pleasure.

You'll need to fix `fbtest` up with your Facebook app IDs and keys, on line 52 of the script.

## To do, maybe:

* Maybe a simple way to install to /usr/local/bin, some simple manpages, and a lovely pink bow on top. That CPAN dependency on fbtest, in particular, pains me.
* Add the ability to use ts's period offsets on user-supplied timestamps, eg "ts 1234567890 - 4 hours"
* External configuration file for fbtest? Or at least the option of one.