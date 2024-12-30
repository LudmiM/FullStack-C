# **Task Manager**

## **Tabla de Contenidos**
1. [Descripción](#descripción)
2. [Instalación](#instalación)
   - [Requisitos Previos](#requisitos-previos)
   - [Pasos de Instalación](#pasos-de-instalación)
3. [Uso](#uso)
   - [Interfaz de Usuario (Frontend)](#interfaz-de-usuario-frontend)
   - [API](#api)
4. [Tecnologías](#tecnologías)
5. [Estructura del Proyecto](#estructura-del-proyecto)
6. [Contacto](#contacto)

---

## **Descripción**

"Task Manager" es una aplicación web para la gestión de tareas que permite a los usuarios:
- **Crear** nuevas tareas.
- **Leer** y visualizar las tareas existentes.
- **Actualizar** el estado de las tareas (completada o pendiente).
- **Eliminar** tareas.

La interfaz está diseñada para ser intuitiva y moderna, permitiendo al usuario gestionar sus tareas de manera eficiente.

---

## **Instalación**

### **Requisitos Previos**

Para ejecutar este proyecto, necesitarás tener instalados los siguientes programas:

- **Node.js**: Se recomienda la última versión LTS. [Descargar Node.js](https://nodejs.org/)
- **MongoDB Atlas**: Tener una base de datos de MongoDB configurada. [Crear base de datos en MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database)

---

### **Pasos de Instalación**

1. **Clona el repositorio:**

    ```bash
    git clone https://github.com/LudmiM/FullStack-C.git
    cd FullStack-C
    ```

2. **Instala las dependencias:**

    Para el backend:

    ```bash
    cd backend
    npm install
    ```

    Para el frontend:

    ```bash
    cd frontend
    npm install
    ```

3. **Configura las variables de entorno:**

    - En la carpeta **backend**, crea un archivo `.env` con las siguientes variables:

    ```plaintext
    CLIENT=http://localhost:5173
    PORT=3000
    ```

    - En la carpeta **frontend**, crea un archivo `.env` con las siguientes variables:

    ```plaintext
    VITE_SERVER=http://localhost:3000
    ```

4. **Inicia el servidor:**

    - Para iniciar el **backend**:

    ```bash
    npm run dev
    ```

    - Para iniciar el **frontend**:

    ```bash
    npm run dev
    ```

    Ahora puedes acceder a la aplicación en tu navegador en `http://localhost:5173`.

---

## **Uso**

### **Interfaz de Usuario (Frontend)**

Una vez que accedas a la aplicación, podrás realizar las siguientes acciones desde la interfaz de usuario:

- **Crear una tarea**: Ingresa los detalles y guarda una nueva tarea.
- **Marcar una tarea como completada**: Cambia el estado de la tarea a "Completada".
- **Editar o eliminar una tarea**: Modifica los detalles de una tarea o elimínala.

### **API**

El backend ofrece los siguientes endpoints para interactuar con las tareas:

- `GET /api/tasks`: Obtiene la lista de todas las tareas.
- `GET /api/tasks/:id`: Obtiene el detalle de una tarea específica.
- `POST /api/tasks`: Crea una nueva tarea.
- `PUT /api/tasks/:id`: Actualiza una tarea existente.
- `DELETE /api/tasks/:id`: Elimina una tarea.

---

## **Tecnologías**

- **Frontend**:
  - React
  - Vite
  - TailwindCSS
- **Backend**:
  - Node.js
  - Express.js
- **Base de datos**:
  - MongoDB
- **Autenticación**:
  - JWT (JSON Web Token)

## **Estructura del Proyecto**

```
mi-proyecto/
│
├── backend/                      # Código del backend
│   ├── __tests__/                 # Pruebas del backend
│   ├── validations/               # Validaciones (ej. expres-validations)
│   ├── middleware/                # Middlewares
│   ├── controllers/               # Controladores de las rutas
│   ├── config/                    # Configuración de la base de datos, modelos y Swagger
│   ├── db/                        # Configuración de la base de datos
│   ├── swagger/                   # Configuración de Swagger
│   ├── models/                    # Modelos de la base de datos
│   ├── router/                    # Rutas de la API
│   ├── server.js                  # Configuración del servidor
│   ├── .env                       # Variables de entorno
│
├── frontend/                     # Código del frontend
│   ├── src/                       # Archivos fuente de React
│   ├── public/                    # Archivos públicos (HTML, imágenes)
│   ├── package.json               # Dependencias del frontend
│   └── vite.config.js             # Configuración de Vite
│   ├── .env                       # Variables de entorno
│
└── README.md                     # Documentación
```

## **Contacto**

Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

- **🔗 LinkedIn**: [Ludmila Muñoz Loza](https://www.linkedin.com/in/ludmilaml/)
- **✉️ Correo electrónico**: ludmila.mloza@gmail.com
- **🐙 GitHub**: [@LudmiM](https://github.com/LudmiM)