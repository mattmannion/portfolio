FROM nginx

RUN rm /etc/nginx/conf.d/*

COPY ./default.conf /etc/nginx/conf.d/

CMD [ "nginx", "-g", "daemon off;" ]