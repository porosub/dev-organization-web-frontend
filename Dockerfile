FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
ENV PORT=3000
ENV NODE_ENV=production

RUN npm run build
CMD [ "node", "./dist-server/bin/www" ]

