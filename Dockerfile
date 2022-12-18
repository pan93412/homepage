# The homepage image. For testing purpose only.
# You have to provide your own `.env.local`
# to make it work.

FROM node:18-alpine AS builder
WORKDIR /app

COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN corepack enable \
  && pnpm i --production --prefer-frozen-lockfile

# Copy environment variables
COPY .env.local .

# Copy source code
COPY . .

# Add `output: standalone` to configuration
# It replaces the trailing `};` to `  output: "standalone"` following with `\n};`.
RUN sed -i 's/};/  output: \"standalone\",\n};/g' ./next.config.js

# Build
RUN pnpm build && pnpm postbuild

# Production image, copy all the files and run next
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/.next/server/chunks ./.next/server/chunks
COPY --from=builder --chown=nextjs:nodejs /app/.env.local ./.env.local

RUN corepack enable && pnpm add sharp

USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
