FROM nginx:stable-alpine

COPY ./web/ /var/www/pro

COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /var/www/pro
