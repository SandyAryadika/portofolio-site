# Personal Portfolio Website

This is an interactive personal portfolio website designed to showcase my projects, skills, and professional journey. Built with **React** and **Vite**, it features advanced animations, 3D interactive elements, and a smooth user experience tailored for desktop viewing.

## ✨ Features

- **Interactive Hero Section:** Typing text effects and decrypted text animations for a cyber-tech feel.
- **Advanced Animations:**
  - **GSAP ScrollTrigger:** Smooth reveal animations for skills (staggered slide-in) and projects (fade up) as you scroll.
  - **Framer Motion:** Used for additional UI motion effects.
- **3D Interactive Elements:**
  - **Physics-based Lanyard:** An interactive 3D card simulation using `react-three-fiber` and `rapier`.
  - **Card Swap Effect:** A dynamic stack of certification cards.
- **Responsive Logic:** Automatically detects screen size and prompts users to switch to desktop for the best experience on mobile devices.

## 🚀 Tech Stack

- **Core:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** Custom CSS3 (CSS Modules & Global Styles)
- **Animations:**
  - [GSAP (GreenSock)](https://greensock.com/gsap/)
  - [Framer Motion](https://www.framer.com/motion/)
- **3D & Canvas:**
  - [React Three Fiber (R3F)](https://docs.pmnd.rs/react-three-fiber)
  - [Drei](https://github.com/pmndrs/drei)
  - [Rapier](https://github.com/pmndrs/react-three-rapier) (Physics Engine)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

## 📂 Project Structure

```bash
src/
├── assets/          # Static assets (images, fonts, 3D models)
│   ├── fonts/       # Custom fonts
│   └── images/      # Project screenshots & certificates
├── components/      # Reusable UI components
│   ├── CardSwap.jsx      # 3D Card swapping animation
│   ├── Lanyard.jsx       # Physics-based lanyard component
│   ├── Navbar.jsx        # Navigation bar
│   ├── ScrollReveal.jsx  # Text reveal animation wrapper
│   └── TextType.jsx      # Typewriter effect component
├── layouts/         # Layout wrappers
│   └── MainLayout.jsx    # Global layout structure
├── pages/           # Application pages
│   └── Home.jsx          # Main landing page
└── styles/          # CSS Stylesheets
    ├── global.css        # Global variables & reset
    ├── home.css          # Homepage specific styles
    └── navbar.css        # Navbar styles
```

## 🛠️ Installation & Setup

Follow these steps to run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/SandyAryadika/portofolio-site.git
    cd portofolio-site
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in browser:**
    Visit `http://localhost:5173` (or the port shown in your terminal).

## 📝 License

This project is licensed under the MIT License.

