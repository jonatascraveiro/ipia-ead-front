FROM node:20.11-alpine AS builder

WORKDIR /app

COPY pnpm-lock.yaml ./

RUN npm install -g pnpm

COPY . .

RUN CI=1 pnpm i

RUN pnpm run build

FROM node:20.11-alpine AS runner

WORKDIR /app
RUN npm install -g pnpm

COPY --from=builder /app/vite.config.ts ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

ENV NODE_ENV=production

EXPOSE 5173

CMD ["pnpm", "preview", "--host", "--port", "5173"]