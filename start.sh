#! bin/bash

cd frontend
npx serve -s build -l $PORT

cd ..

cd backend
pwd
node index.js