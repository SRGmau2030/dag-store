# DAG Tienda de Mascotas

## Descripción General

Este proyecto es una aplicación de **E-commerce** moderna y funcional, construida con **Next.js (App Router)** y **TypeScript**, diseñada para la venta de mascotas exóticas (peces, geckos, serpientes) y sus suministros. Utiliza una arquitectura de componentes moderna y tiene como objetivo proporcionar una interfaz de usuario completa para la navegación de productos, filtrado por categorías y un proceso de compra funcional con un carrito.

## Tecnologías Utilizadas

-   **Next.js 15+:** El framework de React para producción, utilizado para enrutamiento, renderizado optimizado y una estructura full-stack.
-   **React 19:** La biblioteca de JavaScript para construir interfaces de usuario.
-   **TypeScript:** Un superconjunto de JavaScript que añade tipado estático, mejorando la robustez y mantenimiento del código.
-   **Tailwind CSS:** Un framework CSS de utilidad-primera para un estilizado rápido y flexible.
-   **Shadcn UI / Radix UI:** Componentes de interfaz de usuario accesibles y listos para usar (como `Button`, `Card`, `Sheet` para el carrito y `Toast` para notificaciones).
-   **Lucide React:** Una biblioteca de iconos vectoriales consistentes.
-   **pnpm:** El gestor de paquetes recomendado para una gestión eficiente de dependencias.

## Estructura del Proyecto (Next.js App Router)

```
dag-pet-store/
├── app/
│   ├── (root)/                 # Carpeta lógica del grupo de rutas raíz
│   │   ├── layout.tsx          # Layout principal (incluye CartProvider y Navigation)
│   │   └── page.tsx            # Página de Inicio (Home)
│   ├── products/
│   │   └── page.tsx            # Página de listado de productos y filtros
│   └── globals.css             # Estilos globales (Tailwind base)
├── components/                 # Componentes de UI y Lógica
│   ├── ui/                     # Componentes base (Button, Card, Sheet, etc.)
│   ├── navigation.tsx          # Barra de navegación con indicador del carrito
│   ├── footer.tsx              # Pie de página
│   ├── product-card.tsx        # Tarjeta de producto individual
│   ├── cart-sheet.tsx          # Contenido del carrito de compras
│   └── category-filter.tsx     # Componente para filtrar productos
├── contexts/
│   └── cart-context.tsx        # Lógica central del Carrito de Compras (Estado global)
├── lib/
│   ├── products.ts             # Catálogo de productos (datos simulados y tipados)
│   └── utils.ts                # Utilidades generales (función 'cn' para Tailwind)
├── hooks/
│   └── use-toast.ts            # Lógica para mostrar notificaciones flotantes
├── types/
│   └── product.ts              # Definición de tipos para Product y CartItem
├── public/                     # Archivos estáticos (imágenes de productos)
├── package.json                # Metadatos del proyecto y dependencias
├── next.config.mjs             # Configuración de Next.js
├── postcss.config.mjs          # Configuración de PostCSS
└── tsconfig.json               # Configuración de TypeScript
```

### Descripción de Carpetas y Componentes Clave

-   **`app/`**: Directorio principal de rutas de Next.js.
    -   **`app/products/page.tsx`**: Contiene la lógica para filtrar y listar productos.
-   **`src/contexts/`**: Contiene el `CartContext`, que administra el estado de los artículos en el carrito a través de un *Provider* de React.
-   **`src/lib/products.ts`**: Es la capa de "datos" de la aplicación. Aquí se define el inventario de la tienda.
-   **`src/components/`**: Aloja todos los bloques de construcción de la interfaz de usuario.
    -   **`product-card.tsx`**: Renderiza la información de un producto y maneja la acción de agregarlo al carrito.

## Configuración

El proyecto está configurado utilizando `next.config.mjs` para las opciones de Next.js y `tsconfig.json` para las opciones de TypeScript. Tailwind CSS se configura a través de `postcss.config.mjs`.

## Empezando

### Prerrequisitos

-   Node.js (versión 18 o superior)
-   pnpm (Recomendado) o npm/yarn como gestor de paquetes

### Instalación

1.  Clona el repositorio:

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd dag-pet-store
    ```

2.  Instala las dependencias:

    ```bash
    pnpm install
    ```

### Ejecutando la Aplicación

1.  Inicia el servidor de desarrollo:

    ```bash
    pnpm run dev
    ```

2.  Abre tu navegador y navega a la dirección proporcionada por Next.js (normalmente `http://localhost:3000`).

### Construyendo para Producción

1.  Construye la aplicación para producción:

    ```bash
    pnpm build
    ```

2.  La salida de la construcción estará en el directorio `.next`. Puedes iniciar el servidor de producción con:

    ```bash
    pnpm start
    ```

## Contribución

¡Las contribuciones son bienvenidas! Por favor, sigue estos pasos:

1.  Haz un fork del repositorio.
2.  Crea una nueva rama para tu característica o corrección de errores.
3.  Realiza tus cambios y commitea con mensajes descriptivos.
4.  Envía un pull request.

## Licencia

[Especifica la licencia bajo la cual se publica el proyecto]
