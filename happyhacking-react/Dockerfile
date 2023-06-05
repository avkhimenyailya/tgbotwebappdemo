FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY src  ./src
COPY index.html ./
EXPOSE 8080
CMD npm run dev