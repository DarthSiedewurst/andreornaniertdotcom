FROM node:14.16.0
LABEL MAINTAINER="marcomueller"
WORKDIR /app
COPY . /app
RUN npm install
RUN node -v
RUN npm run build