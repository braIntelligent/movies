#! bin/bash

echo "INSTALANDO DEPENDENCIAS DE FRONTEND Y BACKEND"

cd frontend
npm install
npm run build

cd ../backend
pwd
npm install
