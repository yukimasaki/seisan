FROM node:latest

WORKDIR /var/www/html

RUN apt update && \
    npm install -g npm

EXPOSE 3000
ENV HOST 0.0.0.0