FROM node

RUN npm init -y && npm install redis

COPY server.js .

EXPOSE 3000

CMD ["node", "server.js"]
