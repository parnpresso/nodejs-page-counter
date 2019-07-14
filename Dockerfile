FROM node:10

ENV APPLICATION_ROOT /app/page-counter

RUN mkdir /app/
ADD . /app/

WORKDIR $APPLICATION_ROOT
