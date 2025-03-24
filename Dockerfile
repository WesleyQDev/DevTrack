FROM node:22.14.0-alpine AS builder

WORKDIR /app

# Copie apenas os arquivos de dependências primeiro para aproveitar o cache
COPY package.json pnpm-lock.yaml ./

# Instale o pnpm e as dependências
RUN npm install -g pnpm && \
    pnpm install --frozen-lockfile

# Agora copie o restante dos arquivos
COPY . .

# Compile a aplicação
RUN pnpm run build

# Resultado final - apenas os arquivos estáticos
FROM alpine:latest

# Instale apenas o necessário para servir arquivos estáticos
RUN apk add --no-cache curl

WORKDIR /var/www/html

# Copie apenas os arquivos de build do estágio anterior
COPY --from=builder /app/dist/ .

VOLUME /var/www/html

# Este container apenas prepara os arquivos,
# você pode montá-los no seu container nginx existente