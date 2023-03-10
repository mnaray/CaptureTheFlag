FROM alpine:latest

COPY ./ /home/root/

RUN apk add openssl
RUN apk add vim
RUN apk add nano
RUN cd /home/root/ && /home/root/encryption.sh && rm flag.txt encryption.sh
