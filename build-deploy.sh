#!/bin/bash

rm -rf public
cd client
npm i
npm run prod
mv dist public
mv public ../
cd ..