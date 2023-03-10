for n in $(seq 10000); do
    i=$(($n - 1))
    DECRYPTED=$(cat flag.txt.enc | openssl aes-256-cbc -d -a -pass pass:$i)
    if [ $DECRYPTED == "flag{bruteforce_challenge}" ]; then
        echo "The pin is: $i"
        echo $DECRYPTED >out.txt
        break
    else
        echo "Wrong password: $i"
    fi
done
