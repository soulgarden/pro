FROM nginx:1.27.5-alpine AS nginx

COPY ./web/ /var/www/pro

COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /var/www/pro
