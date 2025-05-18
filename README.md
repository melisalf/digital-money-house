# 💲 Digital Money House

![Portada](/public/assets/cover.png)

**Digital Money House** es una billetera digital que permite a los usuarios realizar transferencias, administrar tarjetas, visualizar su actividad financiera y más. El proyecto fue desarrollado como parte del desafío profesional de la certificación **Front-End Developer** en Digital House.

---


1. [Descripción](#descripción)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Estructura de carpetas](#estructura-de-proyecto)
4. [Funcionalidades principales](#funcionalidades-principales)
5. [Instalación y ejecucion](#instalación)

**Digital Money House** es una billetera digital que permite a los usuarios realizar transferencias, administrar tarjetas, visualizar su actividad financiera y más. El proyecto fue desarrollado como parte del desafío profesional de la certificación **Front-End Developer** en Digital House.

## 🚀 Tecnologías utilizadas

- **Next.js** (Framework de React)
- **TypeScript** (Tipado estático)
- **Tailwind CSS** (Estilos Responsive)
- **React Hook Form + Yup** (Manejo de formularios y validaciones)
- **Zustand** (Manejo de estado global)
- **React Query** (Manejo de consultas asíncronas)
- **Sonner** (Notificaciones)

## 📌 Estructura de carpetas

digital-money-house/
├── public/
│   └── assets/              # Imágenes y recursos estáticos
├── src/
│   ├── app/                 # Rutas y páginas (Next.js App Router)
│   ├── components/          # Componentes reutilizables
│   ├── context/             # Estados globales con context API / Zustand
│   ├── data/                # Constantes y textos mockeados (JSON, arrays, etc.)
│   ├── hooks/               # Hooks personalizados (useTransactions, etc.)
│   ├── schemes/             # Validaciones con Yup (login, register, card, etc.)
│   ├── services/            # Peticiones a la API (fetch, axios o fetch wrapper)
│   ├── types/               # Tipos de datos (TypeScript)
│   └── utils/               # Funciones utilitarias (formateo, conversiones, etc.)
├── .eslintrc.json           # Reglas de linting
├── package.json             # Dependencias y scripts
├── tailwind.config.js       # Configuración de Tailwind CSS
├── tsconfig.json            # Configuración de TypeScript
└── README.md                # Documentación del proyecto


## 📌 Funcionalidades principales

- ✅ Registro e inicio de sesión con autenticación mediante token.
- ✅ Administración de tarjetas asociadas y datos de cuenta.
- ✅ Realización de pagos de servicios y carga de dinero..
- ✅ Visualización de actividad con paginación, busqueda y filtros.
- ✅ Diseño responsive y accesible.
- ✅ Copia rápida de alias y CVU.

## 📦 Instalación y ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/digital-money-house.git
cd digital-money-house
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Configurar variables de entorno
Crea un archivo `.env.local` en la raíz del proyecto y agrega las siguientes variables:
```env
NEXT_PUBLIC_API_URL= "https://digitalmoney.digitalhouse.com/api";
NEXT_PUBLIC_API_URL_SERVICE="https://digitalmoney.digitalhouse.com"
```

### 4️⃣ Ejecutar el proyecto
```bash
npm run dev
```
Luego, accede a `http://localhost:3000` en tu navegador.

---
Hecho con ❤️ por Ferraris Melisa 🚀
