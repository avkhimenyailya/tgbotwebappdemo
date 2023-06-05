FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i
COPY src  ./src
COPY index.html ./
CMD npm run dev