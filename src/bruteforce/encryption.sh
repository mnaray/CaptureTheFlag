PIN=$(shuf -i 0-9999 -n 1)
cat ./flag.txt | openssl aes-256-cbc -a -salt -pass pass:$PIN -out flag.txt.enc
