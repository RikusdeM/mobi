#!/bin/sh

docker build -t mobi .
docker run -d -p 8080:8080 mobi

exit 0