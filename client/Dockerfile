### STAGE 1: Build ###
FROM node:12.16.3-alpine as build

WORKDIR /client

ENV PATH /client/node_modules/.bin:$PATH
COPY package.json /client/package.json

RUN yarn --silent
RUN yarn add react-scripts -g --silent

COPY . /client

RUN yarn build

### STAGE 2: Prod env ###

FROM nginx:alpine

COPY ./config/nginx_api_proxy.conf /etc/nginx/conf.d/default.conf

COPY --from=build /client/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]