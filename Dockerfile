FROM node:14.16.0
LABEL MAINTAINER="marcomueller"
WORKDIR /app
RUN ["chmod", "+x", "docker-entrypoint.sh"]
COPY . /app