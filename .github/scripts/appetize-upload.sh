#!/bin/bash
# Publishes an archive and its sha256 under a prefix of the binaries bucket.
# Never overwrites: when the archive is already there, the published one
# replaces the local file, so the sha256 always matches what downloads.
#
# usage: BINARIES_BUCKET=<bucket> BINARIES_BASE_URL=<url> appetize-upload.sh <prefix> <archive>
set -euo pipefail

prefix=$1
archive=$2
name=$(basename "$archive")

# Uploads a file unless its key exists. Returns 1 when it does.
put() {
  local file=$1 key=$2 content_type=$3 output
  if output=$(aws s3api put-object --bucket "$BINARIES_BUCKET" --key "$key" --body "$file" \
    --content-type "$content_type" --if-none-match '*' 2>&1); then
    echo "Uploaded $key"
  elif grep -q PreconditionFailed <<<"$output"; then
    echo "Already published: $key"
    return 1
  else
    echo "$output" >&2
    exit 1
  fi
}

# The archive is never uploaded twice. When it is already published, download
# that one over the local build, so the sha256 below is the published archive's.
if ! put "$archive" "$prefix/$name" application/gzip; then
  curl --fail --silent --show-error --location --retry 3 --output "$archive" "$BINARIES_BASE_URL/$prefix/$name"
fi

# Publish the sha256 unless one is already there.
(cd "$(dirname "$archive")" && shasum -a 256 "$name" | tee "$name.sha256")
put "$archive.sha256" "$prefix/$name.sha256" text/plain || true
