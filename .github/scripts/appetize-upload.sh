#!/bin/bash
# Uploads files under a prefix of the binaries bucket. Never overwrites: it
# stops at the first file that is already there.
#
# usage: BINARIES_BUCKET=<bucket> appetize-upload.sh <prefix> <file>...
set -euo pipefail

prefix=$1
shift

for file in "$@"; do
  key="$prefix/$(basename "$file")"
  if output=$(aws s3api put-object --bucket "$BINARIES_BUCKET" --key "$key" --body "$file" --if-none-match '*' 2>&1); then
    echo "Uploaded $key"
  elif grep -q PreconditionFailed <<<"$output"; then
    echo "Already published, nothing more uploaded: $key"
    exit 0
  else
    echo "$output" >&2
    exit 1
  fi
done
