#!/bin/bash

# Quelle für dieses Script:
# https://stackoverflow.com/questions/37465864/docker-how-to-run-sql-file-in-an-image

set -e
# service mysql start
mysql </mysql/profiles.sql
# service mysql stop
