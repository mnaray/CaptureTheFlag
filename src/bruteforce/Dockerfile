FROM alpine:latest

COPY ./ /home/root/

RUN apk add openssl
RUN cd /home/root/ && /home/root/encryption.sh && rm flag.txt encryption.sh
