FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y nodejs-legacy
RUN apt-get install -y npm
RUN apt-get install -y git

WORKDIR /src

ADD package.json package.json
RUN npm install

ADD bower.json bower.json
RUN node_modules/bower/bin/bower --allow-root install

ADD . /src

EXPOSE 8000

CMD ["node","server/server.js"]