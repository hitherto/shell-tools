#!/usr/bin/perl

use strict;

if ($ARGV[0] eq 'help'){
	print "TS - a quick and handy timestamp generator
----------
Usage:

ts [no args]           - returns current Unix timestamp
ts human [timestamp]   - returns the human equivalent of [timestamp]
ts - [number] [period] - returns the timestamp for a time in the past
ts + [number] [period] - returns the timestamp for a time in the future
ts help                - returns this help text
----------
Accepted values for [period] are:

second(s), minute(s), hour(s), day(s), week(s), month(s), year(s)

If no [period] argument is given, seconds will be used.
----------
Examples:

ts - 3 hours
ts - 1 week
ts + 4 days
ts + 16 years
ts human 1303087208

";
}

my ($time, $mult, $op);

if ($ARGV[0] eq 'human'){
	if ($ARGV[1]){
		print scalar localtime($ARGV[1])."\n";
	} else {
		print scalar localtime(time())."\n";
	}
	exit;
}

if ($ARGV[2]){
	if ($ARGV[2] =~ m/seconds(s)?/){
		$mult = 1;
	} elsif ($ARGV[2] =~ m/minute(s)?/){
		$mult = 60;
	} elsif ($ARGV[2] =~ m/hour(s)?/){
		$mult = 60*60;
	} elsif ($ARGV[2] =~ m/day(s)?/){
		$mult = 24*60*60;
	} elsif ($ARGV[2] =~ m/week(s)?/){
		$mult = 24*60*60*7;
	} elsif ($ARGV[2] =~ m/month(s)?/){
		$mult = 24*60*60*30;
	} elsif ($ARGV[2] =~ m/year(s)?/){
		$mult = 24*60*60*365;
	} else {
		$mult = 1;
	}
}

if ($ARGV[0]){
	if ($ARGV[0] eq '+'){
		$op=1;
	} elsif ($ARGV[0] eq '-'){
		$op=-1;
	}
}

if ($ARGV[1]){
	$time = time() + ($mult * $ARGV[1] * $op);
} else {
	$time = time();
}

print "$time\n";
