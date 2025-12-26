FROM node:20-slim AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:20-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-slim AS runner
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm","run","start"]
