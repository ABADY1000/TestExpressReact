cd client
npm i
npm run start &
pid1=$!
cd ../server
npm i
npm run start
pid2=$!

wait pid1 && echo "PID1:(${pid1}) exited normally"
wait pid2 && echo "PID2:(${pid2}) exited normally"
