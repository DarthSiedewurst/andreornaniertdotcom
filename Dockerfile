FROM node:14.16.0
LABEL MAINTAINER="marcomueller"
WORKDIR /app
COPY . /app
RUN ["chmod", "+x", "docker-entrypoint.sh"]