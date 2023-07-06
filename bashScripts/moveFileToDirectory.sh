#!/bin/bash
# Helper script for moving a <file> to a <new directory>
#
# This script accepts the following positional parameters:
#
# - $1: *Required*: file to move
# - $2: *Required*: new directory to move file to
#

FILENAME=$1
DIRECTORY=$2

# Check if the file exists, ! expression  True if expression is false
if [ ! -f "$FILENAME" ]; then
    echo "File $FILENAME does not exist, exiting script"
    exit 1
fi

# Check if the directory exists, if not, create it
if [ ! -d "$DIRECTORY" ]; then
    echo "Directory $DIRECTORY does not exist"
    echo "Creating directory $DIRECTORY"
    mkdir $DIRECTORY
fi

# Move FILENAME to DIRECTORY
mv $FILENAME $DIRECTORY

# Check if FILENAME was moved successfully to DIRECTORY
echo "Checking if $FILENAME was moved to $DIRECTORY"
cd $DIRECTORY
echo "Current directory: $(pwd)"

if [ -f "$FILENAME" ]; then
    echo "File $FILENAME moved to /$DIRECTORY"
else
    echo "File $FILENAME could not be moved to $DIRECTORY"
fi

# Then, in your `package.json` file, you can add a script to run this helper script:

# {
#   "scripts": {
#     "move-file": "./moveFileToXdirectory.sh"
#   }
# }

# Now, you can run the script with `npm run move-file <file> <new directory>`.
# For example, if you want to move `file.txt` to `./new-directory`, you can run:

# npm run move-file file.txt ./new-directory
