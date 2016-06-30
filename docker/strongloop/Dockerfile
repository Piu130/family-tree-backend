FROM node:6.2

RUN groupadd -r app && useradd -r --create-home -g app app

RUN mkdir -p /usr/src/app
RUN chown app:app /usr/src/app

WORKDIR /usr/src/app

CMD [ "npm", "start" ]
