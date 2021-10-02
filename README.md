# Bsale test

## entorno de desarrollo:

### frontend

- en vscode `f1`
- ingresar comando `Live Server: Open With Live Server`

### backend

- en una terminal dentro del proyecto backend ejecutar `npm i && npm run dev:local`
- la api estara disponible en el puerto 5000

## entorno de produccion:

se necesita tener instalado docker-compose

- en la carpeta backend copiar `.env.example` y renombrarlo a `.env` y dentro agregar las variables de produccion
- en la raiz del proyecto ejecutar `docker-compose up -d`

la pagina estara disponible en el puerto 5001 y la api en 5000

## Documentacion de la api:

los endpoints disponibles se encuentran en el archivo `bsale.postman_collection.json`
