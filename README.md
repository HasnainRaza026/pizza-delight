# Pizza Delight

Pizza Delight is a modern, responsive pizza ordering website built with React and TypeScript along with Tailwind CSS for styling and Supabase as a backend. Pizza Delight showcases a dynamic menu, interactive ordering experience, and a clean user interface.

## Table of Contents

- [Design Prototype](#design-prototype)
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)

  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build](#build)

## Design Prototype

Before development, the project UI was prototyped in Figma. View the interactive design on Figma Community [here](https://www.figma.com/community/file/1506324272871566030/pizza-restaurant-website)

## Demo

The site is deployed on Netlify, check it out [here](https://pizzadelight026.netlify.app/)

![image](/public/image.png)

## Features

- **Responsive Design**: Layout adapts seamlessly to desktop, laptop, tablet, and mobile devices.
- **Dynamic Menu**: Menu items and details are fetched in real-time from Supabase.
- **Interactive Ordering**: Select pizza size and toppings with live price updates.
- **Favorites**: Users can add pizzas to their favorites list.
- **Order Submission**: Orders are placed and stored via Supabase backend.
- **Modern UI**: Clean, intuitive interface powered by Tailwind CSS.
- **Fast Performance**: Built with Vite for lightning-fast development and optimized builds.

## Tech Stack

- **React** - Component-based UI library for building interactive interfaces
- **Vite** - Next-generation frontend tooling
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Supabase** - Backend as a Service for database and authentication
- **HTML5** - Semantic markup

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Supabase project with a `menu` table and `orders` table configured

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HasnainRaza026/pizza-delight.git
   cd pizza-delight
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the project root and add your Supabase credentials:

   ```env
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view in your browser. The page will reload on changes.

### Build

Generate a production build:

```bash
npm run build
# or
yarn build
```

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
```
