# FROM nginx

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]

# FROM node:alpine

# WORKDIR /usr/src/app

# COPY package*.json ./

# EXPOSE 9000

# RUN npm install --only=production

# # Build production app
# RUN npm run build

# COPY dist/apps/api/main.js /usr/src/app

# CMD [ "npm", "start" ]

FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY dist/apps/api/main.js /usr/src/app
COPY dist/apps/blockchaininfo/ /usr/share/nginx/html/dist

EXPOSE 9000

RUN npm install

CMD [ "npm", "start" ]

FROM nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]