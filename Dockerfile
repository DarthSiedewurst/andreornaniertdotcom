FROM node:14.16.0
LABEL MAINTAINER="marcomueller"
WORKDIR /app
COPY . /app
RUN ["chmod", "+x", "/usr/src/app/docker-entrypoint.sh"]