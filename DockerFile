FROM node:chakracore

COPY . .

RUN yarn install

CMD npm start