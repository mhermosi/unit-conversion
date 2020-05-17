FROM node:12.16.3-alpine


WORKDIR /api

COPY package.json /api/package.json

RUN yarn

COPY . /api

RUN ls -ls

RUN ls -l /api/api

EXPOSE 8080

CMD ["node", "server.js"]