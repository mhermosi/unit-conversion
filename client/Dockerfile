### STAGE 1: Build ###
FROM node:12.16.3-alpine as build

WORKDIR /client

ENV PATH /client/node_modules/.bin:$PATH
COPY package.json /client/package.json

RUN npm install --silent
RUN npm install react-scripts -g --silent

COPY . /client

RUN npm run build

### STAGE 2: Prod env ###

FROM nginx:alpine

COPY --from=build /client/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]