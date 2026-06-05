# Node User Roles & Permissions

## 📋 Descripción

Sistema de gestión de usuarios, roles y permisos desarrollado en Node.js con TypeScript. Este proyecto proporciona una arquitectura base completa y modular para implementar autenticación y autorización basada en roles (RBAC - Role-Based Access Control) en aplicaciones empresariales.

**¿Para quién es este proyecto?**  
Este proyecto es ideal para desarrolladores que necesitan:
- Una base sólida para implementar sistemas de autenticación y autorización
- Un sistema de roles y permisos escalable y mantenible
- Una arquitectura modular tipo "Clean Architecture"
- Buenas prácticas en Node.js, TypeScript y Prisma

## ✨ Características

- 🔐 **Autenticación con JWT**: Sistema de login seguro con JSON Web Tokens
- 👥 **Gestión de Usuarios**: CRUD completo de usuarios con soft delete
- 🎭 **Sistema de Roles**: Asignación múltiple de roles por usuario
- 🔑 **Gestión de Permisos**: Control granular de permisos por módulo
- 🛡️ **Middleware de Autorización**: Protección de rutas basada en roles y permisos
- 📊 **Base de datos optimizada**: Uso de stored procedures y funciones SQL para mejor rendimiento
- 🐳 **Docker Ready**: Configuración lista para desarrollo con Docker Compose
- 🏗️ **Arquitectura Modular**: Organización por módulos (Auth, Users, Roles, Permissions)
- 🔒 **Bcrypt**: Encriptación segura de contraseñas
- 📝 **TypeScript**: Código tipado y mantenible
 - 📄 **Documentación con Swagger**: API documentada y disponible en `/doc`

## 🛠️ Tecnologías

- **Runtime**: Node.js
- **Lenguaje**: TypeScript
- **Framework Web**: Express.js
- **ORM**: Prisma
- **Base de Datos**: PostgreSQL 15.3
- **Autenticación**: JWT (jsonwebtoken)
- **Encriptación**: bcryptjs
- **Gestor de Paquetes**: pnpm
- **Contenedores**: Docker & Docker Compose

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (v18 o superior recomendado)
- [pnpm](https://pnpm.io/) (v10.28.0 o superior)
- [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/) (opcional, para desarrollo)
- [PostgreSQL](https://www.postgresql.org/) (si no usas Docker)

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

> **Nota de seguridad**: Nunca compartas tu archivo `.env` ni lo subas al repositorio. El archivo `.env.example` es solo una plantilla.

## 📚 Documentación Swagger

Una vez iniciado el servidor, la documentación interactiva queda disponible en:

- `http://localhost:3000/doc`

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
│   │   └── user/              # Gestión de usuarios
│   ├── seed/                  # Seeds para datos iniciales
│   ├── server/                # Configuración del servidor
│   │   ├── Server.ts
│   │   └── routes.ts
│   ├── shared/                # Código compartido
│   │   ├── adapters/          # Adaptadores (JWT, bcrypt)
│   │   ├── context/           # Contextos globales
│   │   ├── dto/               # DTOs compartidos
│   │   ├── error/             # Manejo de errores
│   │   ├── handler/           # Handlers compartidos
│   │   ├── interface/         # Interfaces compartidos
│   │   └── validators/        # Validaciones compartidas
│   └── utils/                 # Utilidades
│       ├── enum/
│       └── regex/
├── docker-compose.dev.yml     # Docker Compose para desarrollo
├── package.json
├── pnpm-workspace.yaml
├── prisma.config.ts
└── tsconfig.json
```

### Organización por Módulos

Cada módulo sigue la misma estructura:

```
module-name/
├── controller/        # Controladores (manejo de requests)
├── datasource/        # Capa de datos (acceso a BD)
├── dto/               # Data Transfer Objects
│   ├── request/       # DTOs de entrada
│   └── response/      # DTOs de salida
├── routes/            # Definición de rutas
├── usecase/           # Casos de uso del módulo
└── index.ts           # Exportaciones del módulo
```

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

### Comandos de Prisma útiles

```bash
# Crear una nueva migración
pnpm prisma migrate dev --name nombre_de_la_migracion

# Aplicar migraciones (produccion)
pnpm prisma migrate deploy

# Aplicar migraciones (desarrollo)
pnpm prisma migrate dev

# Resetear la base de datos (¡cuidado en producción!)
pnpm prisma migrate reset

# Abrir Prisma Studio (interfaz visual)
pnpm prisma studio

# Generar el cliente de Prisma
pnpm prisma generate

# Ver el estado de las migraciones
pnpm prisma migrate status
```

## 📜 Scripts Disponibles

```json
{
  "dev": "Inicia el servidor en modo desarrollo con hot-reload",
  "build": "Compila el proyecto TypeScript a JavaScript",
  "start": "Construye y ejecuta el proyecto en producción",
  "seed": "Ejecuta el seed de datos iniciales"
}
```

### Uso:

```bash
pnpm dev      # Desarrollo
pnpm build    # Construir
pnpm start    # Producción
pnpm seed     # Seed de datos
```

## 🔐 Seguridad

- Las contraseñas se almacenan encriptadas con bcrypt
- Autenticación basada en JWT
- Validación de tokens en cada request protegido
- Soft delete para mantener integridad de datos
- Variables de entorno para información sensible
- CORS configurado

## 🤝 Contribuir

Si deseas mejorar este proyecto:

1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

ISC

## 👨‍💻 Autor

Desarrollado como proyecto base para sistemas de gestión de usuarios, roles y permisos.

---

## 🎯 Próximos Pasos

Una vez que tengas el proyecto corriendo, puedes:

1. **Personalizar los roles y permisos** según tu aplicación
2. **Agregar más módulos** siguiendo la misma estructura
3. **Implementar refresh tokens** para mayor seguridad
4. **Agregar validaciones mas robustas** con bibliotecas como Zod o class-validator
5. **Implementar logging** con Winston o Pino
6. **Agregar tests** con Jest o Vitest
7. **Documentar la API** con Swagger/OpenAPI

## 💡 Tips para Desarrolladores

- **Usa el seed**: El comando `pnpm seed` crea usuarios, roles y permisos de ejemplo
- **Hot Reload**: El modo `pnpm dev` recarga automáticamente en cada cambio
- **TypeScript**: Aprovecha el tipado estático para evitar errores
- **Arquitectura**: Sigue la estructura por módulos para mantener el código organizado

## 🐛 Troubleshooting

### Error de conexión a la base de datos
- Verifica que PostgreSQL esté corriendo
- Revisa que DATABASE_URL en `.env` esté correcta
- Si usas Docker, verifica que el contenedor esté activo: `docker ps`

### Error al generar Prisma Client
- Ejecuta `pnpm prisma generate` manualmente
- Verifica que el archivo `schema.prisma` sea válido

### Puerto en uso
- Cambia el puerto en el archivo `.env`
- O detén el proceso que esté usando el puerto 3000

---

**¿Tienes preguntas?** Abre un issue en el repositorio o revisa la documentación de las tecnologías utilizadas.

¡Feliz desarrollo! 🚀
