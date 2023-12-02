FROM nginx:1.25.3-alpine as nginx

COPY ./web/ /var/www/pro

COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /var/www/pro
