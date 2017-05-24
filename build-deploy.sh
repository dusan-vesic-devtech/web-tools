#!/bin/bash

rm -rf public
cd client
npm i
npm run build
mv dist public
mv public ../
cd ..