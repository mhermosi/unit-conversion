FROM node:12.16.3-alpine


WORKDIR /api

COPY package.json /api/package.json

RUN npm install --silent

COPY . /api

RUN ls -ls

RUN ls -l /api/api

EXPOSE 5000

CMD ["node", "server.js"]