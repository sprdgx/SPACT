#!/bin/bash

# Function to display usage instructions
usage() {
  echo "Usage: ./install_spact.sh <install_dir>"
  echo "  <install_dir>: Directory where 'spact' will be installed"
  exit 1
}

# Check if the install directory is provided
if [ $# -ne 1 ]; then
  usage
fi

INSTALL_DIR="$1"

# Create a temporary directory for downloads
TMP_DIR=$(mktemp -d)
cd "$TMP_DIR"

# Download the spact package archive
curl -L -o spactCli.tar.gz https://github.com/sprdgx/SPACT/raw/main/Spact-Cli/spactCli.tar.gz

# Extract the archive
tar -xzvf spactCli.tar.gz

# Move the extracted files to the install directory
sudo mkdir -p "$INSTALL_DIR"
mv cli.js spact.sh "$INSTALL_DIR"

# Clean up temporary files
rm -rf "$TMP_DIR"

# Make spact.sh executable
chmod +x "$INSTALL_DIR/spact.sh"

# Create symbolic link 'spact' to spact.sh
sudo ln -s "$INSTALL_DIR/spact.sh" /usr/local/bin/spact
sudo mv "$INSTALL_DIR/cli.js" /usr/local/bin

echo "spact setup completed. You can now use 'spact' commands."
