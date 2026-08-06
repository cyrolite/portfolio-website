# Nicholas Yap Portfolio Website

Personal portfolio website built to showcase my background, projects, technical skills, and cybersecurity interests through an interactive OS-inspired interface.

Live website can be found [here](https://portfolio-website-h43xk526g-cyrolites-projects.vercel.app/).

---

## 🛠 Tech Stack

### Frontend

* Next.js
* React
* JavaScript
* Tailwind CSS

### UI / Animation

* Framer Motion
* React Type Animation

### Deployment

* Vercel

---

## ✨ Features

* OS-inspired desktop interface
* Interactive taskbar and start menu
* Searchable applications
* Multiple draggable windows
* Window minimize/maximize/close functionality
* Custom terminal interface
* Resume PDF viewer
* Responsive portfolio sections

---

## 📂 Applications

The website is structured as a virtual desktop environment with different applications:

* About Me
* Skills
* Projects
* Contact
* Resume
* Terminal

---

## 📁 Project Structure

```
portfolio-website/
│
├── app/
│   ├── page.js
│   └── layout.js
│
├── components/
│   ├── About.jsx
│   ├── Background.jsx
│   ├── Hero.jsx
│   ├── Loader.jsx
│   ├── OSWindow.jsx
│   ├── Projects.jsx
│   ├── Resume.jsx
│   ├── Skills.jsx
│   ├── StartMenu.jsx
│   ├── Taskbar.jsx
│   ├── Terminal.jsx
│   ├── TransitionContext.jsx
│   └── terminalCommands.js
│
├── public/
│   └── resume.pdf
│
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Clone repository

```bash
git clone https://github.com/cyrolite/portfolio-website.git
```

### Navigate into project

```bash
cd portfolio-website
```

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🏗 Production Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

---

## 🚀 Deployment

This project is deployed using Vercel.

Deployment workflow:

```
GitHub Repository
        |
        v
      Vercel
        |
        v
 Production Website
```

Changes pushed to the production branch automatically trigger a new deployment.

---

## 📌 Future Improvements

* Additional desktop applications
* More terminal commands
* Improved mobile support
* Additional interactive cybersecurity demonstrations
* Enhanced window management features