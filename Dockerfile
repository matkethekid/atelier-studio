# --- STAGE 1: Zavisnosti ---
FROM node:20 AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# --- STAGE 2: Build ---
FROM node:20 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_BACKEND_URL
ENV NEXT_PUBLIC_BACKEND_URL=$NEXT_PUBLIC_BACKEND_URL

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# --- STAGE 3: Runner ---
FROM node:20-slim AS runner
WORKDIR /app

# Ovde ne stavljaj NEXT_PUBLIC_BACKEND_URL, to ćemo pri pokretanju
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]