# Prostředí pro sestavení aplikace
FROM node:16.4.2-alpine as react-build
# Složka, ve které container nebo obraz bude pracovat
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
# Zkopírování nastavení pro aplikaci
COPY package.json ./
COPY package-lock.json ./
# Spuštění npm ci, podobné npm install (instalování závislostí), (čte package-lock)
RUN npm ci --silent
# instalace react-scripts potřebných pro npm run build
RUN npm install react-scripts@3.4.1 -g --silent
# Zkopírování všech souborů do WORKDIR
COPY . ./
# Sestavení aplikace
RUN npm run build

## Sestavení obrazu aplikace
# Na čem pojede aplikace (nginx)
FROM nginx:stable-alpine
# Multipart build, kopírování předchozích částí (sestavení) do WORKDIR (/app)
COPY --from=react-build /app/build /usr/share/nginx/html
# Informování dockeru o tom, že pracuje na portu 80 (Hypertext Transfer Protocol (HTTP))
EXPOSE 80
# Instrukce jak spustit aplikaci
CMD ["nginx", "-g", "daemon off;"]