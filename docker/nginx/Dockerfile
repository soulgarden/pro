FROM nginx:stable-alpine

COPY ./web/ /var/www/pro

COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p \
    /tmp/nginx/client_temp \
    /tmp/nginx/proxy_temp \
    /tmp/nginx/fastcgi_temp \
    /tmp/nginx/uwsgi_temp \
    /tmp/nginx/scgi_temp \
  && chown -R 101:101 /tmp/nginx

USER 101:101

WORKDIR /var/www/pro
