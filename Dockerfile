FROM node:18-slim as BUILD

RUN npm i -g pnpm@8
RUN mkdir -p /app
WORKDIR /app
COPY . /app

RUN pnpm i
RUN nx run match:build:production

FROM node:18-slim

RUN npm i -g pnpm@8

RUN mkdir -p /app
WORKDIR /app

COPY --from=BUILD ./dist/apps/match /app
RUN pnpm i
RUN pnpm i source-map-support

EXPOSE 10000
ENTRYPOINT [ "node", "-r", "source-map-support/register", "./main.js" ]
