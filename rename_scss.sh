#!/bin/bash

# Define the base directory where your SCSS partials are located
BASE_DIR="_sass/components/animators"

# Define the subdirectories to search within
SUBDIRS=("intro" "motion-1d" "motion-2d" "forces") # Added "forces" just in case you enable those later

echo "Starting SCSS file renaming process..."

for DIR in "${SUBDIRS[@]}"; do
    TARGET_DIR="$BASE_DIR/$DIR"
    if [ -d "$TARGET_DIR" ]; then
        echo "Processing directory: $TARGET_DIR"
        # Find all files matching the pattern and rename them
        find "$TARGET_DIR" -maxdepth 1 -name "*vocab-matching.scss" -print0 | while IFS= read -r -d $'\0' FILE; do
            NEW_FILE="${FILE//-vocab-matching/-interactive-match}"
            if [ "$FILE" != "$NEW_FILE" ]; then
                mv "$FILE" "$NEW_FILE"
                echo "  Renamed: $(basename "$FILE") -> $(basename "$NEW_FILE")"
            else
                echo "  No change needed for: $(basename "$FILE")"
            fi
        done
    else
        echo "Directory not found, skipping: $TARGET_DIR"
    fi
done

echo "SCSS file renaming complete. Remember to update your @import statements if they use the full filename."
echo "Also, rebuild your Jekyll site to apply changes: bundle exec jekyll serve"