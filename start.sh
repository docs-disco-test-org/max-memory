#!/bin/sh

docker build -t max-memory:latest . \
&& docker run --rm -it --name max-memory --memory=2048mb max-memory:latest