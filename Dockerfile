FROM node:14.16.0
LABEL MAINTAINER="marcomueller"
RUN ["chmod", "+x", "docker-entrypoint.sh"]
WORKDIR /app
COPY . /app