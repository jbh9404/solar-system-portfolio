# 🪐 Solar System Portfolio

> An interactive 3D portfolio application themed around the Solar System, where each celestial body represents a different section of the developer's journey.

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React Three Fiber](https://img.shields.io/badge/React_Three_Fiber-9.6-black?style=for-the-badge)](https://docs.pmnd.rs/react-three-fiber)
[![Three.js](https://img.shields.io/badge/Three.js-0.185-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

## 🌟 Overview

The **Solar System Portfolio** is a highly interactive, modern web application designed to showcase a developer's skills, projects, and experiences in a unique and engaging way. Instead of scrolling through a traditional page, users can explore a 3D solar system. Each planet or celestial body routes the user to a specific section, such as:

- **About**
- **Skills**
- **Projects**
- **Experience**
- **Contact**

Built with modern web technologies, it leverages the power of server-side rendering with Next.js App Router and stunning 3D graphics rendering via Three.js and React Three Fiber.

## ✨ Features

- **Interactive 3D Environment**: A fully rotatable and zoomable solar system built with `three` and `@react-three/fiber`.
- **Immersive Navigation**: Click on different planets to navigate to distinct portfolio sections seamlessly.
- **Modern Tech Stack**: Utilizes Next.js 16 (App Router) and React 19 for optimal performance.
- **Beautiful UI**: Styled with Tailwind CSS for a sleek, responsive, and glassmorphic look.
- **Type-Safe**: Written entirely in TypeScript for robust development.

## 🛠️ Tech Stack

- **Framework:** [Next.js (App Router)](https://nextjs.org/)
- **Core Library:** [React](https://react.dev/)
- **3D Graphics:** [Three.js](https://threejs.org/), [React Three Fiber (@react-three/fiber)](https://docs.pmnd.rs/react-three-fiber), [Drei (@react-three/drei)](https://github.com/pmndrs/drei)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Linting & Formatting:** ESLint, Prettier

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine (v18 or higher is recommended).

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/yourusername/solar-system-portfolio.git
   cd solar-system-portfolio
   ```

2. **Install the dependencies**:
   Using npm:
   ```bash
   npm install
   ```
   Or using yarn/pnpm:
   ```bash
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open the application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the 3D portfolio.

## 📂 Project Structure

A quick look at the core structure of the project:

```text
solar-system-portfolio/
├── public/                 # Static assets (images, textures for planets, icons)
├── src/
│   ├── app/                # Next.js App Router pages and layouts
│   │   ├── about/          # About me section
│   │   ├── contact/        # Contact information section
│   │   ├── experience/     # Work experience section
│   │   ├── projects/       # Projects showcase section
│   │   ├── skills/         # Technical skills section
│   │   ├── globals.css     # Global styles and Tailwind imports
│   │   ├── layout.tsx      # Root layout component
│   │   └── page.tsx        # Main 3D view entry point
│   └── components/         # Reusable React components
│       ├── Navigation.tsx  # Global UI navigation bar
│       ├── PageContainer.tsx # Wrapper for content pages
│       └── SolarSystem.tsx # The core 3D scene and planet logic
├── next.config.ts          # Next.js configuration
├── package.json            # Project metadata and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts a Next.js production server.
- `npm run lint`: Runs ESLint to analyze the code for errors.
- `npm run format`: Formats code across the project using Prettier.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/solar-system-portfolio/issues).

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
