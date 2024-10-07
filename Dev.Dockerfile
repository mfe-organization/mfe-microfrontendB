FROM node:18
LABEL authors="dihnatovich"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3003
