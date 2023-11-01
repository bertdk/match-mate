FROM node:18-slim

RUN npm i -g pnpm@8

RUN mkdir -p /app
WORKDIR /app

COPY ./dist/apps/match /app
RUN pnpm i
RUN pnpm i source-map-support

EXPOSE 4006
ENTRYPOINT [ "node", "-r", "source-map-support/register", "./main.js" ]
