FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install --silent && npm cache clean --force

COPY . .

EXPOSE 3000

ENTRYPOINT ["npm", "run", "dev"]
