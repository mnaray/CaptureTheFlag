FROM node:lts-alpine

USER node

WORKDIR /home/node

ADD --chown=node:node . /home/node

RUN npm ci

EXPOSE 80

CMD [ "node", "app.js" ]
