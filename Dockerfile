FROM node:22-alpine3.19

WORKDIR /app

COPY package*.json ./

RUN npm install -g nodemon && npm ci

COPY . .

# CMD ["npm", "run", "server"]
CMD ["nodemon", "index.js"]