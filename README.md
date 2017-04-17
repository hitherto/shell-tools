# Random Shell Tools

These are a couple of small, simplish command-line utilities that I've put together over the years to help with irritating repetitive tasks that come up frequently while developing websites. 

They may or may not be usable or well-written.

They may or may not be sensible alternatives to some cherished command-line tool, web-based workflow or magic goat's-blood-powered ritual that you use to get through your day.

More may be added over time.

## The Tools

* `longurl [url]` - takes a URL from a URL-shortening service and attempts to dig up the original URL it references. This depends on having curl on your system.
* `ts` - a perl script for manipulating Unix timestamps. Mainly, it will convert any timestamp to human time, and more importantly provides an easy way to generate timestamps an arbitrary period in the past or future, with commands like "ts - 4 hours". Type "ts help" for more info.


## Dependencies

* command-line `curl` (longurl)
* perl5 (ts)

## Installation

Barring the dependencies above, `longurl` and `ts` should nestle happily anywhere on your path and provide hours of pleasure.

## To do, maybe:

* Maybe a simple way to install to /usr/local/bin, some simple manpages, and a lovely pink bow on top.
* Add the ability to use ts's period offsets on user-supplied timestamps, eg "ts 1234567890 - 4 hours"