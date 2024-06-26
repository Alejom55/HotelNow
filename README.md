# HotelNow

Esta es una aplicación de reserva de hoteles desarrollada con Laravel en el backend y React en el frontend.

## Instalación

### Requisitos previos

- PHP >= 8.0
- Composer
- Node.js >= 12
- npm >= 6

### Pasos de instalación

1. Clona este repositorio en tu máquina local:

```bash
 git clone https://github.com/Alejom55/HotelNow.git
```

2. Instala las dependencias del backend:

```bash
   cd api
   composer install
```

3. Levanta el servidor de Laravel:

```bash
   php artisan serve
```

4. Instala las dependencias del frontend:

```bash
   cd ../client
   npm install o npm i
```

5. Levanta el servidor de desarrollo de React:

```bash
npm run dev
```

## Arquitectura y Diseño

La aplicación sigue una arquitectura de cliente-servidor, donde el backend proporciona APIs RESTful para manejar las operaciones de la base de datos y el frontend interactúa con estas APIs para mostrar la interfaz de usuario al usuario final.

### Backend (Laravel)

Rutas: Se definen en el archivo routes/api.php y se utilizan controladores para manejar las solicitudes HTTP.
Controladores: Manejan la lógica de negocio y llaman a los servicios correspondientes para interactuar con la base de datos.

### Frontend (React)

Componentes: Se dividen en componentes reutilizables que representan partes de la interfaz de usuario, como tarjetas de hotel, formularios de reserva, etc.

Enrutamiento: Utiliza React Router para manejar la navegación entre diferentes páginas de la aplicación.

Estilos: Utiliza Tailwind CSS para estilizar los componentes y proporcionar un diseño coherente en toda la aplicación.

Shadcn/ui: Para agilizar las creaciones de las interfaces y componentes de toda la aplicación.


