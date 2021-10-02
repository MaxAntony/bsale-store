FROM node:16.8-alpine AS build

WORKDIR /backend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


FROM node:16.8.0-alpine

WORKDIR /backend

COPY --from=build /backend/build ./build

COPY package*.json ./

RUN npm i --production

EXPOSE 5000

CMD npm run start:composer