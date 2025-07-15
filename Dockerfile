FROM node:18-slim

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp \
  build-essential && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*
  
WORKDIR /usr/src/app

COPY package.json .

RUN npm install
RUN npm install -g qrcode-terminal
RUN npm install -g pm2

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
