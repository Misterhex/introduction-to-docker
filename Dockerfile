FROM ubuntu

RUN apt update -y

RUN apt install -y nodejs nodejs-legacy

COPY server.js .

EXPOSE 3000

CMD ["node", "server.js"]
