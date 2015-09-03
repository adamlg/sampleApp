FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y nodejs-legacy
RUN apt-get install -y npm
RUN apt-get install -y git

ADD package.json /src/package.json
RUN cd /src; npm install

ADD bower.json /src/bower.json
RUN cd /src; /src/node_modules/bower/bin/bower --allow-root install

ADD . /src

EXPOSE 8000

CMD ["node","/src/server/server.js"]