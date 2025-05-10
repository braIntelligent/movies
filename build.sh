#! bin/bash

echo "INSTALANDO DEPENDENCIAS DE FRONTEND"

cd frontend
npm install
npm run build
cd ..


echo "INSTALANDO DEPENDENCIAS DE BACKEND"
cd backend
npm install
cd ..
