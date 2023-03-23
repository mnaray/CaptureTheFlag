FROM mysql:5.6
# This might help
# https://forums.docker.com/t/mysql-create-database-and-import-sql-file-with-dockerfile/30300
# https://stackoverflow.com/questions/37465864/docker-how-to-run-sql-file-in-an-image

COPY ./profiles.sql /mysql/profiles.sql
COPY ./setup.sh /mysql/setup.sh

# RUN /mysql/setup.sh
RUN mkdir -p /var/run/mysqld
RUN chown mysql:mysql /var/run/mysqld
RUN service mysql start
# RUN MYSQL_ROOT_PASSWORD="password" mysql -u root -ppassword < /mysql/profiles.sql
RUN mysql < /mysql/profiles.sql
RUN service mysql stop
RUN rm /mysql/profiles.sql /mysql/setup.sh
