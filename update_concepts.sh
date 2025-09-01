#!/bin/bash

# This script updates the YAML front matter and lead paragraph
# for all concept pages in a specified directory.

# Check if a directory path is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <path_to_concepts_directory>"
  exit 1
fi

# Set the target directory from the first argument
concepts_dir="$1"

# Check if the directory exists
if [ ! -d "$concepts_dir" ]; then
  echo "Error: Directory '$concepts_dir' not found."
  exit 1
fi

# Find all markdown files in the specified directory and its subdirectories
find "$concepts_dir" -type f -name "*.md" | while read -r file; do

  # Check if the file's YAML front matter contains 'collection: concepts'
  if grep -q 'collection: concepts' "$file"; then

    echo "Updating: $file"

    # 1. Add the 📘 emoji to the title
    #    - Matches a line that starts with 'title:' followed by any text
    #    - Replaces it with 'title: 📘 ' and the original title text
    sed -i '' -e 's/^title: \(.*\)/title: 📘 \1/' "$file"

    # 2. Update the lead paragraph with the new style
    #    - Matches a line that starts with '<p class="lead"'
    #    - Replaces the entire line with the new, required HTML tag
    sed -i '' -e 's/^<p class="lead".*$/<p class="lead" markdown="1" style="border-left: 4px solid #2A52BE; padding-left: 1rem;">/' "$file"

  fi
done

echo "Script finished."