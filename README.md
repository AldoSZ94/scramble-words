# ⭐ Scramble Words

Aplicación web interactiva desarrollada con **React y TypeScript** que propone un juego de palabras en el que el usuario debe descubrir la palabra correcta a partir de sus letras desordenadas.

El proyecto está enfocado en la gestión de estado mediante **`useReducer`**, la creación de componentes reutilizables y la construcción de una interfaz dinámica y responsive.

## 🚀 Demo

🔗 **Live Demo:** https://scramble-words-aldosz94.netlify.app/

## 🛠️ Tecnologías utilizadas

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **HTML**

## ✨ Características

- 🎮 Juego interactivo de palabras desordenadas.
- 🔀 Generación y presentación de palabras con sus letras mezcladas.
- 🧠 Validación de la respuesta introducida por el usuario.
- ✅ Retroalimentación visual al encontrar la respuesta correcta.
- 🎉 Animación de confeti al completar correctamente una palabra.
- ⏭️ Opción para avanzar a una nueva palabra.
- 📊 Gestión del estado del juego mediante `useReducer`.
- 🧩 Componentes reutilizables para mantener una estructura organizada.
- 📱 Interfaz responsive adaptable a diferentes tamaños de pantalla.
- 🎨 Interfaz construida con Tailwind CSS y componentes de shadcn/ui.

## 🧠 Aprendizajes

Durante el desarrollo de este proyecto trabajé principalmente en:

- Gestión de estados complejos mediante **`useReducer`**.
- Diseño de reducers y acciones para controlar diferentes eventos del juego.
- Separación de la lógica de negocio y la interfaz mediante una estructura basada en componentes.
- Tipado de estados, acciones y propiedades utilizando **TypeScript**.
- Creación de componentes reutilizables con React.
- Integración de librerías externas como **Lucide React** y **canvas-confetti**.
- Manejo de eventos e interacción del usuario.
- Construcción de interfaces responsive utilizando **Tailwind CSS**.
- Uso de componentes de **shadcn/ui** para crear una interfaz consistente y reutilizable.

## ⚙️ Gestión del estado

Uno de los principales objetivos del proyecto fue practicar el manejo de estado con **`useReducer`**.

En lugar de distribuir múltiples actualizaciones de estado por diferentes partes del componente, la lógica del juego se concentra en un reducer que recibe acciones y determina cómo debe actualizarse el estado.

Este enfoque permite mantener de forma más organizada aspectos como:

- Palabra actual.
- Letras desordenadas.
- Respuesta del usuario.
- Estado de la ronda.
- Avance hacia una nueva palabra.

De esta manera, la lógica relacionada con las diferentes acciones del juego permanece centralizada y resulta más sencilla de mantener.

## 🎨 Interfaz

La interfaz fue construida utilizando **Tailwind CSS** junto con componentes de **shadcn/ui**, buscando mantener una estructura limpia, reutilizable y adaptable.

También se utilizaron iconos de **Lucide React** para complementar las acciones e indicaciones visuales de la aplicación.

El diseño incorpora comportamiento responsive para ofrecer una experiencia adecuada tanto en dispositivos móviles como en pantallas de escritorio.

## 📂 Organización

La aplicación está organizada mediante componentes y módulos independientes, separando la interfaz de usuario de la lógica encargada de administrar el estado del juego.

Esta estructura facilita la reutilización de componentes y permite mantener una separación clara entre:

- Componentes de interfaz.
- Lógica del juego.
- Reducer y acciones.
- Tipos e interfaces.
- Recursos visuales.

## 👨‍💻 Autor

**Aldo Sandoval Zepeda**

Desarrollador Web

- GitHub: [AldoSZ94](https://github.com/AldoSZ94)

---

⭐ Proyecto desarrollado como parte de mi práctica con **React, TypeScript y gestión de estado**, aplicando una arquitectura basada en componentes reutilizables y una interfaz responsive.
