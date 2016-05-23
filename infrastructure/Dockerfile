FROM debian:jessie
MAINTAINER kolyjjj@foxmail.com
RUN export DEBIAN_FRONTEND=noninteractive
RUN apt-get update \
    && apt-get install -y build-essential curl apt-utils \
    && rm -rf /var/lib/apt/lists/*
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*
RUN node -v && npm -v
COPY start.sh /usr/local/bin/start-auth.sh
RUN chmod a+x /usr/local/bin/start-auth.sh
