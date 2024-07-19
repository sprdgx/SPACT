#!/bin/sh

# Check if the first argument is "init"
if [ "$1" = "init" ]; then
  # Execute cli.js
  node "$(dirname "$0")/cli.js" init
  npm i 

elif [ "$1" = "start" ]; then
  # Run npm start
  npm start

elif [ "$1" = "build" ]; then
  # Run npm run sps-build
  npm run sps-build

else
  echo "Usage: ./sact.sh <init|start|build>"
  exit 1
fi
