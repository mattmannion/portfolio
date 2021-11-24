FROM node:alpine

WORKDIR /usr/app

COPY package.json .

RUN npm i

COPY . .

RUN npm i -g npm-run-all rimraf typescript nodemon 

CMD ["npm", "run", "dd"]