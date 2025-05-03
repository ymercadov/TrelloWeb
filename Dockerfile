# Usar una imagen base de Node.js
FROM node:16-alpine AS build

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copie el archicho package.json y package-lock.json en el directorio antes creado 
COPY package*.json ./

# Copiar los archivos de la aplicación al contenedor
COPY . .
#ENV NODE_OPTIONS=--openssl-legacy-provider
# Instalar las dependencias de la aplicación
RUN npm -f install

# Compilar la aplicación
RUN npm run build --prod

#listamos nuestros archivos generados 
RUN ls -alt
# Usar una imagen ligera de Nginx para deploy
FROM nginx:1.17.1-alpine 

# Copiar la carpeta de salida de la aplicación al contenedor de Nginx
COPY --from=0 /usr/src/app/dist/TrelloWeb /usr/share/nginx/html

# Exponer el puerto 80 para acceder a la aplicación
EXPOSE 80
# Comando que ejcutara la aplicacion
#CMD ["npm", "start"]