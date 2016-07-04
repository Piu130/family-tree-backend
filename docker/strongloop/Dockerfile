FROM node:6.2

RUN groupadd -r app && useradd -r --create-home -g app app

RUN mkdir -p /usr/src/app
RUN chown app:app /usr/src/app

RUN mkdir -p /data/strongloop_containers
RUN chown app:app /data/strongloop_containers

WORKDIR /usr/src/app

CMD [ "npm", "start" ]
