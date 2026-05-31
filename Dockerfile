# Imagen base ligera
FROM node:current-slim

# Crea carpeta de trabajo
WORKDIR /app

# Copia sólo lo necesario para instalar dependencias
COPY trackplay-frontend/package.json trackplay-frontend/pnpm-lock.yaml .npmrc ./

# Copia dependencias locales (para resolver "file:../")
COPY trackplay-core /trackplay-core

# Instala pnpm y dependencias del sistema
RUN npm install -g pnpm@latest && \
    apt-get update -y && \
    apt-get install -y --no-install-recommends openssl && \
    rm -rf /var/lib/apt/lists/*

# Instala dependencias y limpia
RUN pnpm install --frozen-lockfile --silent && \
    pnpm store prune && \
    pnpm cache clean && \
    rm -rf ./trackplay-core && \
    rm -f .npmrc

# Copia configuraciones necesarias
COPY trackplay-frontend/tsconfig.json ./tsconfig.json
COPY trackplay-frontend/next-env.d.ts ./next-env.d.ts
COPY trackplay-frontend/next.config.ts ./next.config.ts
COPY trackplay-frontend/postcss.config.mjs ./postcss.config.mjs

# Copia código y assets
COPY trackplay-frontend/public ./public
COPY trackplay-frontend/src ./src

# Comando de arranque en desarrollo
CMD ["pnpm", "run", "dev"]
