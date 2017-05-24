rm -rf public;
cd client;
npm run build
mv dist public
mv public ../
cd ..