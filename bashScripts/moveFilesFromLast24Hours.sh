#!/bin/bash
# Helper script that will find all the files in a directory that have been modified within the last 24 hours and move them to a new directory
#
# This script accepts the following positional parameters:
#
# - $1: *Required*: new directory to move file to
#

DIRECTORY=$1

# Check that the directory parameter is not empty
if [ -z "$DIRECTORY" ]; then
    echo "Missing required parameter for project name"
    exit 1
fi

# Check if the directory exists, if not, create it
if [ ! -d "$DIRECTORY" ]; then
    echo "Directory $DIRECTORY does not exist"
    echo "Creating directory $DIRECTORY"
    mkdir $DIRECTORY
fi

# Find all files in the current directory that have been modified within the last 24 hours
# FILESTOMOVE=$(find . -type f -mtime 0)
FILESTOMOVE=$(find . -type f -mtime 0 -name "test*.js")

# Check FILESTOMOVE is not empty
if [ -z "$FILESTOMOVE" ];
then
    echo "No files to move, exiting script"
    exit 1
else
    echo "Files to move: $FILESTOMOVE"
fi

# Move FILESTOMOVE to DIRECTORY, one liner here
mv $FILESTOMOVE $DIRECTORY

# Check if FILESTOMOVE was moved successfully to DIRECTORY
echo "Checking if $FILESTOMOVE were moved to $DIRECTORY"
cd $DIRECTORY
echo "Current directory: $(pwd)"
echo "Files in $DIRECTORY: $(ls)"