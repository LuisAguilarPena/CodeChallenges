#!/bin/bash
# Helper script for generating a new file with the test failures
# If no failures are found, check the last lines of the log file for a build failure state
# This script accepts the following positional parameters:
#
# - $1: *Required*: name of the log file
#

LOGFILE=$1

# Check if the log file name was provided, if not provided, exit, -z checks if the string length is zero
if [ -z "$LOGFILE" ]; then
    echo "No log file name provided"
    exit 1
fi

DATE=$(date +%Y-%m-%d_%T)
NEWFILENAME="testFails_$DATE.txt"

# Check for error in the log file, errors are prefixed with "✖"
# -B 1: print 1 line before the match, -A 1: print 1 line after the match, <regex>: the regex to match, <file>: the file to search in
FAILURES=$(grep -B 1 -A 1 "✖" wdioJenkinsErrorLogs.txt)

# Check if failures were found, if not, check for build failure
if [ -z "$FAILURES" ]
then
    echo "No test failures found, checking for build failure state at the end of the log file"
    # Check for build failure in the log file, by getting the last 15 lines
    FAILURES=$(tail -n 15 $LOGFILE)
    # -e flag is used to enable interpretation of escape sequences, such as \n for new line, Write the failures to a new file
    echo -e "This is the build failure state: \n$(tee $NEWFILENAME <<< "$FAILURES")"
else 
    echo -e "This are the test failures: \n$(tee $NEWFILENAME <<< "$FAILURES")"
fi

# one liner
# tee new.txt <<< "$(grep -B 1 -A 1 "✖" wdioJenkinsErrorLogs.txt)"
# grep -B 1 -A 1 "✖" wdioJenkinsErrorLogs.txt | tee new.txt
