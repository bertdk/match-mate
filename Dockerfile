FROM node:18-alpine3.18 as server-node

RUN npm i -g pnpm@8 


FROM server-node AS server-base
WORKDIR /src
RUN apk add --no-cache \
  python3 \
  make \
  gcc \
  g++
COPY package.json \
  tsconfig* \
  nx.json \
  pnpm-lock.yaml \
  ./
RUN pnpm i


FROM server-base AS server-build

COPY apps/match ./apps/match/
COPY libs ./libs/
RUN pnpm nx run match:build:production


FROM server-node AS server-prod
LABEL description="The server side for the MatchMate webapp"
USER node
WORKDIR /src

COPY --from=server-build --chown=node:node /src/dist/apps/match ./
ENV NODE_ENV=production
RUN pnpm i
RUN pnpm i source-map-support
ENTRYPOINT [ "node", "-r", "source-map-support/register", "./main.js" ]
