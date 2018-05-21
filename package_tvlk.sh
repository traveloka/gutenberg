#!/bin/bash
# Enable nicer messaging for build status
YELLOW_BOLD='\033[1;33m';
COLOR_RESET='\033[0m';
status () {
	echo -e "\n${YELLOW_BOLD}$1${COLOR_RESET}\n"
}

build_files=$(ls **/build/*.{js,css})

# Generate the plugin zip file
status "Creating archive..."
zip -r gutenberg.zip \
	gutenberg.php \
	lib/*.php \
	blocks/library/*/*.php \
	post-content.js \
	$vendor_scripts \
	$build_files \
	languages/gutenberg.pot \
	languages/gutenberg-translations.php \
	README.md

# Reset `gutenberg.php`
git checkout gutenberg.php

status "Done."
