FROM node:alpine

WORKDIR /usr/app
 
RUN npm install

CMD ["npm", "start"]