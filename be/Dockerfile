FROM node:alpine

WORKDIR /usr/app

COPY package.json .

RUN yarn

COPY . .

CMD ["npm", "run", "start"]