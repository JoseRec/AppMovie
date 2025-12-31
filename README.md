
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center"> AppMovie</h1>

  <p align="center">
    Aplicación web para buscar películas y series utilizando la API de OMDb.
    <br />
    <br />
    <a href="https://creative-valkyrie-7b1617.netlify.app/">Ver Demo</a>
  </p>
</div>

---

##  Sobre el Proyecto

**AppMovie** es una aplicación web desarrollada con **React + TypeScript** que permite buscar películas y series por nombre, mostrando resultados obtenidos desde la **OMDb API**.

La aplicación muestra información básica como:
- Título
- Año de lanzamiento
- Tipo (película o serie)
- Poster
- Identificador IMDb (imdbID)

El proyecto está enfocado en **buenas prácticas de frontend moderno**, manejo de estado global y consumo seguro de APIs externas.

---

##  Demo

🔗 **Demo en producción:**  
👉 https://creative-valkyrie-7b1617.netlify.app/

---

##  Tecnologías Utilizadas

Este proyecto fue construido usando:

- ⚛️ **React**
- 🟦 **TypeScript**
- ⚡ **Vite**
- 🧠 **Zustand** (manejo de estado global)
- 🌐 **OMDb API**
- 📦 **Axios / Fetch API**
- 🎨 **Tailwind CSS**
- 🎯 **Heroicons**

---

## 📂 Estructura del Proyecto

```txt
src/
│── Components/        # Componentes reutilizables (MovieList, MovieItem, SearchItem, etc.)
│── store            # Store global con Zustand
│── App.tsx
│── main.tsx
