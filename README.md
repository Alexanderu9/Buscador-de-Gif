#  GifGrid - Buscador de GIFs

Una aplicación web moderna desarrollada con React y Vite que permite buscar y mostrar GIFs utilizando la API de Giphy.

## Vercel

-Link: (https://buscador-de-gif-nine.vercel.app/)

##  Características

- ✨ Búsqueda de GIFs en tiempo real
- 🎯 Interfaz intuitiva y responsive
- 🔄 Loading states durante las peticiones
- 🚫 Prevención de categorías duplicadas
- 📱 Diseño adaptable (mobile-first)
- ⚡ Optimización con Vite para desarrollo rápido

##  Tecnologías Utilizadas

- **React 18.2.0** - Biblioteca para interfaces de usuario
- **Vite 7.0.0** - Herramienta de construcción y desarrollo
- **JavaScript ES6+** - Lenguaje de programación
- **CSS3** - Estilos y diseño responsive
- **Giphy API** - Servicio de búsqueda de GIFs
- **PropTypes** - Validación de tipos en React
- **ESLint** - Linter para calidad de código

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── AddCategory.jsx     # Componente de entrada de búsqueda
│   ├── GifGrid.jsx         # Grid de GIFs por categoría
│   ├── GifItems.jsx        # Tarjeta individual de GIF
│   └── index.js            # Barrel exports
├── helpers/
│   └── getGifs.js          # Función para obtener GIFs de la API
├── hooks/
│   └── useFetchGifs.js     # Custom Hook para manejo de estado
├── GifExpertApp.jsx        # Componente principal
├── main.jsx                # Punto de entrada
└── styles.css              # Estilos globales
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/Alexanderu9/giftgrid.git
   cd giftgrid
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:5173
   ```

## 📋 Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm run preview  # Previsualiza la build de producción
npm run lint     # Ejecuta el linter ESLint
```

## 🎯 Funcionalidades

### 🔍 Búsqueda de GIFs
- Escribe el nombre de la categoría que deseas buscar
- Presiona Enter para agregar la categoría
- Los GIFs se cargan automáticamente

### 🎨 Interfaz
- **Grid responsive** que se adapta a diferentes tamaños de pantalla
- **Loading states** mientras se cargan los GIFs
- **Prevención de duplicados** - No se pueden agregar categorías repetidas
- **Diseño limpio** con tarjetas individuales para cada GIF

## 🔧 Componentes Principales

### `GifExpertApp`
Componente principal que maneja el estado global de las categorías.

### `AddCategory`
Formulario controlado para agregar nuevas categorías de búsqueda.

### `GifGrid`
Contenedor que muestra los GIFs de una categoría específica.

### `GifItems`
Tarjeta individual que muestra un GIF con su título.

### `useFetchGifs`
Custom Hook que maneja la lógica de fetching y estado de loading.

## 🌐 API Integration

La aplicación utiliza la **Giphy API** para obtener los GIFs:

```javascript
const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
```

- **Límite**: 10 GIFs por búsqueda
- **Formato**: Imágenes optimizadas (downsized_medium)
- **Error handling**: Manejo de errores de red y respuestas

## 🎨 Estilos

- **CSS personalizado** con variables y flexbox
- **Diseño responsive** con media queries
- **Tema claro** con colores suaves
- **Animaciones** y transiciones suaves
- **Cards con sombras** para mejor UX

## 🔒 Validaciones

- **PropTypes** para validación de tipos en componentes
- **Input validation** para evitar búsquedas vacías
- **Error boundaries** para manejo de errores



## 👤 Autor

**Tu Nombre**
- GitHub: (https://github.com/Alexanderu9)
- LinkedIn: (https://www.linkedin.com/in/alexander-urdaneta-gomez-1658b0293/)

⭐ ¡No olvides dar una estrella al proyecto si te fue útil!
