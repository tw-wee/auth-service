#!/bin/bash

if [ $# -eq 0 ]
then
  echo "please specify an augument. usage: run <app|redis>"
  exit 1
fi

if [ $1 = "redis" ]
then
  docker-compose -f compose-redis.yml up
  exit 0
fi

docker-compose -f compose-redis.yml -f docker-compose.yml up
