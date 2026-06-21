# Node User Roles & Permissions

## 📋 Descripción

Sistema empresarial de gestión de usuarios, roles y permisos (**RBAC** - *Role-Based Access Control*) desarrollado sobre **Node.js** utilizando **TypeScript**. El proyecto implementa los principios de **Clean Architecture** mediante un diseño modular desacoplado, asegurando una alta escalabilidad, mantenimiento limpio, tipado estricto y un rendimiento optimizado directamente en la capa de datos.

---

## ✨ Características de Nivel Enterprise

- 🔐 **Autenticación Robusta**: Flujo completo de sesión (`Login`, `Register` y `Refresh Token`) protegido mediante JSON Web Tokens (JWT).
- 🎭 **Control de Acceso Granular (RBAC)**: Middleware de autorización flexible capaz de auditar la jerarquía e intersección de permisos y roles en tiempo real por cada endpoint.
- 📐 **Arquitectura Desacoplada**: Implementación estricta de **Data Transfer Objects (DTOs)**, **Mappers** independientes y patrones **Adapter** en el directorio `shared/adapters` para aislar librerías de terceros (Zod, Bcrypt, Cloudinary, JWT).
- 🗄️ **Capa de Persistencia Optimizada**: Lógica relacional delegada de forma eficiente a PostgreSQL mediante funciones nativas e Índices Filtrados optimizados con Prisma.
- 🖼️ **Gestión Multimedia**: Módulo integrado para la administración y subida segura de imágenes de perfiles conectado externamente mediante adaptadores de infraestructura.
- 🐳 **Entorno Dockerizado**: Configuración automatizada con Docker Compose lista para desarrollo local inmediato.
- 📄 **Auditoría de API Interactiva**: Documentación Open-API viva autogenerada mediante Swagger accesible en la ruta `/doc`.

---

## 📚 Documentación Swagger

Una vez iniciado el servidor, la documentación interactiva queda disponible en:

- `http://localhost:3000/doc`

---

## 🛠️ Stack Tecnológico

- **Entorno de Ejecución**: Node.js
- **Lenguaje**: TypeScript
- **Framework Base**: Express.js
- **ORM / Persistencia**: Prisma & Native Postgres Drivers (`PrismaPg`)
- **Motor de Base de Datos**: PostgreSQL
- **Estrategia de Almacenamiento**: Cloudinary (Media Services)
- **Validación de Esquemas**: Zod
- **Gestor de Dependencias**: pnpm Monorepo Workspaces

---

## 📦 Requisitos Previos

Asegúrate de contar con las siguientes herramientas en tu entorno local antes de iniciar la instalación:
- **Node.js** (v18.0.0 o superior)
- **pnpm** (v10.28.0 o superior)
- **Docker & Docker Compose** (Recomendado para el despliegue del contenedor de la base de datos)

---

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd node-user-roles-permissions
```

### 2. Instalar dependencias

```bash
pnpm install
```

### 3. Configurar variables de entorno

Copia el archivo de ejemplo y configura tus variables:

```bash
cp .env.example .env
```

---

## 🏃 Cómo Correr el Proyecto

### Opción 1: Desarrollo con Docker (Recomendado)

Esta es la forma más sencilla para comenzar:

```bash
# 1. Levantar la base de datos PostgreSQL
docker-compose -f docker-compose.dev.yml up -d

# 2. Generar el cliente de Prisma
pnpm prisma generate

# 3. Ejecutar las migraciones
pnpm prisma migrate dev

# 4. (Opcional) Ejecutar el seed para datos iniciales
pnpm seed

# 5. Iniciar el servidor en modo desarrollo
pnpm dev
```

### Opción 2: Desarrollo sin Docker

Si prefieres usar PostgreSQL local:

```bash
# 1. Asegúrate de tener PostgreSQL corriendo localmente
# 2. Configura DATABASE_URL en .env con tu conexión local

# 3. Generar el cliente de Prisma
pnpm prisma generate

# 4. Ejecutar las migraciones
pnpm prisma migrate dev

# 5. (Opcional) Ejecutar el seed
pnpm seed

# 6. Iniciar el servidor en modo desarrollo
pnpm dev
```

### Opción 3: Producción

```bash
# 1. Construir el proyecto
pnpm build

# 2. Iniciar el servidor de producción
pnpm start
```

---

## 📁 Estructura del Proyecto

```
node-user-roles-permissions/
├── prisma/
│   ├── schema.prisma          # Esquema de la base de datos
│   └── migrations/            # Migraciones de la BD
├── src/
│   ├── app.ts                 # Punto de entrada de la aplicación
│   ├── config/                # Configuraciones
│   │   ├── index.ts
│   │   ├── doc/swagger.ts     # Configuracion de swagger
│   │   ├── en-var/            # Variables de entorno
│   │   └── postgred/          # Configuración de PostgreSQL
│   ├── generated/             # Código generado por Prisma
│   │   └── prisma/
│   ├── middlewares/           # Middlewares de Express
│   │   ├── auth.middleware.ts
│   │   ├── error.middleware.ts
│   │   └── helpers/
│   ├── modules/               # Módulos de la aplicación
│   │   ├── auth/              # Autenticación (login, register)
│   │   ├── permission/        # Gestión de permisos
│   │   ├── rol/               # Gestión de roles
│   │   ├── image/             # Firma de url
│   │   └── user/              # Gestión de usuarios
│   ├── seed/                  # Seeds para datos iniciales
│   ├── server/                # Configuración del servidor
│   │   ├── Server.ts
│   │   └── routes.ts
│   ├── shared/                # Código compartido
│   │   ├── adapters/          # Adaptadores desacoplados (Zod, JWT, Cloudinary, Bcrypt)
│   │   ├── context/           # Contextos globales
│   │   ├── dto/               # DTOs compartidos
│   │   ├── error/             # Manejo de errores
│   │   ├── handler/           # Handlers compartidos
│   │   ├── interface/         # Interfaces compartidos
│   │   └── validators/        # Validaciones compartidas
│   └── utils/                 # Expresiones regulares compartidas y enums utilitarios
├── docker-compose.dev.yml     # Docker Compose para desarrollo
├── package.json
├── pnpm-workspace.yaml
├── prisma.config.ts
└── tsconfig.json
```

---

### Organización por Módulos

Cada módulo sigue la misma estructura:

```
module-name/
├── controller/     # Capa HTTP: Recibe peticiones, delega validación y ejecuta Casos de Uso
├── datasource/     # Capa de Infraestructura: Interactúa directamente con Prisma / PostgreSQL
├── dto/            # Capa de Transporte: Objetos de validación entrantes (Request) y esquemas salientes (Response)
├── interface/      # Capa de Abstracción: Contratos de interfaces lógicas del dominio
├── mapper/         # Capa de Conversión: Traduce objetos de la base de datos hacia entidades o DTOs limpios
├── routes/         # Capa de Red: Enrutador Express que mapea rutas y aplica middlewares específicos
├── schema/         # Capa de Reglas: Validaciones estructuradas bajo el motor Zod
└── usecase/        # Capa de Aplicación: Orquestación pura de la lógica de negocio del software
```

---

## 🗃️ Base de Datos

### Modelos Principales

- **user**: Usuarios del sistema
- **role**: Roles disponibles (Admin, User, etc.)
- **permission**: Permisos granulares
- **user_role**: Relación muchos a muchos entre usuarios y roles
- **role_permission**: Relación muchos a muchos entre roles y permisos

### Migraciones

El proyecto incluye stored procedures y funciones para optimizar operaciones comunes:

- Funciones para gestión de permisos
- Funciones para gestión de roles
- Stored procedures para autenticación
- Stored procedures para gestión de usuarios

---

## 📜 Scripts Disponibles

```json
{
  "dev": "Inicia el servidor en modo desarrollo con hot-reload",
  "build": "Compila el proyecto TypeScript a JavaScript",
  "start": "Construye y ejecuta el proyecto en producción",
  "seed": "Ejecuta el seed de datos iniciales"
}
```

---

### Uso

```bash
pnpm run dev      # Desarrollo
pnpm run build    # Construir
pnpm run start    # Producción
pnpm run seed     # Seed de datos
```

---

## 🔐 Seguridad

- Las contraseñas se almacenan encriptadas con bcrypt
- Autenticación basada en JWT
- Validación de tokens en cada request protegido
- Soft delete para mantener integridad de datos
- Variables de entorno para información sensible

---

## 🤝 Contribuir

Si deseas mejorar este proyecto:

1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 👨‍💻 Autor

Diseñado y desarrollado por Jose-YC. Repositorio base profesional de grado empresarial para implementaciones modulares de control de acceso y seguridad.

---


## 💡 Tips para Desarrolladores

- **Usa el seed**: El comando `pnpm seed` crea usuarios, roles y permisos de ejemplo
- **Hot Reload**: El modo `pnpm dev` recarga automáticamente en cada cambio
- **TypeScript**: Aprovecha el tipado estático para evitar errores
- **Arquitectura**: Sigue la estructura por módulos para mantener el código organizado

---

**¿Tienes preguntas?** Abre un issue en el repositorio o revisa la documentación de las tecnologías utilizadas.

¡Feliz desarrollo! 🚀

---
