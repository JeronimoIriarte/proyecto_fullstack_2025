
# 👕 Panozzo Indumentaria | E-commerce Full Stack

![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

<br>

<p align="center">
  <img src="/public/images/logo_horizontal.png" alt="Panozzo Indumentaria Logo" width="300"/>
</p>

<p align="center">
  <strong>Una experiencia de compra premium para fanáticos del fútbol.</strong><br>
  Aplicación Full Stack moderna, escalable y con diseño de alta fidelidad.
</p>

---

## ✨ Características Destacadas

### 🎨 Experiencia de Usuario (Frontend)
* **Diseño Premium UI/UX:** Interfaz moderna con efectos de *glassmorphism*, transiciones suaves y tipografía cuidada.
* **Catálogo Interactivo:** Sistema de filtrado en tiempo real por equipos y categorías.
* **Detalle de Producto:** Modales con sliders de imágenes integrados y selección de talles.
* **Carrito Inteligente:** Persistencia de datos en `LocalStorage` y cálculo automático de totales.
* **Checkout Simulado:** Formulario de pago con validaciones visuales y feedback de estado.

### ⚙️ Potencia & Gestión (Backend)
* **API RESTful:** Arquitectura MVC (Modelo-Vista-Controlador) construida con Express.
* **Base de Datos en la Nube:** Conexión robusta a **MongoDB Atlas**.
* **Panel de Control (CMS):** Interfaz administrativa para gestionar el inventario.
    * ✅ **Crear:** Nuevos productos con subida de imágenes a **Cloudinary**.
    * ✅ **Leer:** Visualización de stock en tiempo real.
    * ✅ **Actualizar:** Edición de detalles y precios.
    * ✅ **Borrar:** Eliminación segura de productos.

---

## 🛠️ Stack Tecnológico

### Frontend
-   **Framework:** [Next.js 15](https://nextjs.org/)
-   **Core:** React 19 (Hooks, Context API, Reducers)
-   **Estilos:** CSS Modules + Variables CSS Globales
-   **Componentes:** Swiper.js (Carruseles), Axios (Peticiones HTTP)

### Backend
-   **Servidor:** Node.js + Express
-   **Base de Datos:** MongoDB + Mongoose ODM
-   **Imágenes:** Cloudinary API
-   **Utilidades:** Cors, Dotenv, Nodemon

---

## 🚀 Instalación y Despliegue

Sigue estos pasos para levantar el proyecto completo en tu entorno local.


1. Clona el repositorio:
 ```bash
git clone [https://github.com/TU_USUARIO/proyecto_react_2025.git](https://github.com/TU_USUARIO/proyecto_react_2025.git)
cd proyecto_react_2025
```
2. Configurar el Backend
```bash
cd backend
npm install
```
Crea un archivo .env en la carpeta backend/ con tus credenciales:

Fragmento de código
```
PORT=5000
DATABASE_URI=mongodb+srv://<TU_USUARIO>:<TU_PASSWORD>@<TU_CLUSTER>.mongodb.net/numendb
```
Inicia el servidor:

```bash
npm run dev
```
El servidor correrá en http://localhost:5000

3. Configurar el Frontend
Abre una nueva terminal en la raíz del proyecto:

```bash
npm install
npm run dev
```
La aplicación estará disponible en http://localhost:3000

## 📂 Estructura del Proyecto
El proyecto sigue una arquitectura Monorepo organizada:
```
/
├── backend/                # Servidor API Express
│   ├── src/
│   │   ├── controllers/    # Lógica de las peticiones
│   │   ├── models/         # Esquemas de Mongoose (Datos)
│   │   ├── routes/         # Endpoints de la API
│   │   └── services/       # Comunicación con la BD
│   └── ...
├── src/                    # Cliente Next.js
│   ├── components/         # Átomos y Moléculas de UI
│   ├── pages/              # Rutas y Vistas (Home, Cart, Admin)
│   ├── styles/             # Módulos CSS y Theme Global
│   └── ...
└── public/                 # Assets estáticos
```

## 🛠️ Diseñado por:
1.  **Iriarte Jeronimo**
2.  **Montenegro Franco**
3.  **Medina Jonathan**
4.  **Conti Franco**

## 🎨 Diseño y Estilos
Rediseño de estilos en la rama NEW-STYLES creado por:
**Iriarte Jeronimo**

## Backend
Backend creado por:
**Iriarte Jeronimo**

<p align="center"> Hecho con ❤️ y mucho código en 2025 </p>

