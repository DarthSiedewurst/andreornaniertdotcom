FROM node:12.14
MAINTAINER marcomueller
WORKDIR /app
COPY . /app
RUN npm install
RUN node -v
RUN npm run build
CMD npm run start