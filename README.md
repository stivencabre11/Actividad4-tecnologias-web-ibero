# Tecnologías Web - Actividad Front-end y Back-end

Este repositorio contiene el desarrollo de la actividad **Tecnología front end en la construcción de una aplicación web II**.

## Estructura del proyecto

- `documentos/`
  - Documento en formato Word con el desarrollo de la actividad (introducción, contenido teórico, ejemplos y código), elaborado por Jhonatan Steven Cabrera Montoya.
- `frontend/`
  - Aplicación React que consume una API REST para listar usuarios y ver el detalle de cada uno.
- `backend/`
  - API REST construida con Node.js y Express que expone los endpoints `/api/usuarios` y `/api/usuarios/:id`.

## Requisitos

- Node.js y npm instalados.

## Cómo ejecutar el backend

```bash
cd backend
npm install
node index.js
```

El servidor se ejecutará en: `http://localhost:3000`.

## Cómo ejecutar el frontend

En otra terminal:

```bash
cd frontend
npm install
npm start
```

La aplicación React se abrirá en: `http://localhost:3000` o `http://localhost:3001` según tu configuración local.

## Autor

- Jhonatan Steven Cabrera Montoya  
  Corporación Universitaria Iberoamericana  
  Ingeniería de Software
