# Versão do Node necessária para rodar o projeto.
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

# Instala as dependências.
RUN npm install

COPY . .

# Roda o comando de build.
RUN npm run build

# Imagem necessária para rodar o client.
FROM nginx:alpine

# Copia o build do projeto para a pasta padrão do nginx.
COPY --from=build /app/dist /usr/share/nginx/html

# Copia o arquivo de configuração do nginx.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80.
EXPOSE 80

# Inicia o nginx.
CMD ["nginx", "-g", "daemon off;"]