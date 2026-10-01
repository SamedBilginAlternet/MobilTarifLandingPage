# syntax=docker/dockerfile:1.7

# ---- Build: export the Next.js site as static files to /app/out ----
FROM node:22-alpine AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .
RUN npm run build

# ---- Serve: static files behind nginx ----
FROM nginx:1.27-alpine AS serve

RUN rm /etc/nginx/conf.d/default.conf
COPY docker/headers.conf /etc/nginx/snippets/headers.conf
COPY docker/nginx.conf /etc/nginx/conf.d/app.conf
COPY --from=build /app/out /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz >/dev/null || exit 1

CMD ["nginx", "-g", "daemon off;"]
