FROM mysql:5.7
# Used version 5.7 for compatibility with node module "mysql".

# This helped:
# https://stackoverflow.com/questions/62999267/how-to-run-mysql-scripts-in-docker-image

COPY ./profiles.sql /docker-entrypoint-initdb.d

EXPOSE 3306
