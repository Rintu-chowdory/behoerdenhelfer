# Build the React client and bundled Node server.
FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json pnpm-lock.yaml .npmrc* ./
RUN corepack enable && pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

# Minimal production runtime.
FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup -S app && adduser -S app -G app
COPY package.json pnpm-lock.yaml .npmrc* ./
RUN corepack enable && pnpm install --prod --frozen-lockfile && pnpm store prune
COPY --from=builder --chown=app:app /app/dist ./dist

USER app
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1:3000/ || exit 1

CMD ["node", "dist/index.js"]
