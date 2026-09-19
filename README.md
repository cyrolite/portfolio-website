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
* Phone-sized app windows, touch controls, and a scrollable application dock

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

## 📱 Preview on a Phone Before Deploying

All of these previews run on your computer. They do not push code or deploy to Vercel.

### Simulate a phone on your laptop

1. Run `npm run dev` and open `http://localhost:3000` in Chrome or Edge.
2. Press `F12` (or `Ctrl+Shift+I`) to open Developer Tools.
3. Press `Ctrl+Shift+M` to toggle the device toolbar, then choose a phone or enter a custom width.
4. Try 320, 390, and 430 pixels wide, plus landscape. Tap **Apps** to open each section.

### Open it on your actual phone

1. Connect the phone and laptop to the same Wi-Fi.
2. Run `npm run dev -- --hostname 0.0.0.0` in this project. If a development server is already running, stop that server first with `Ctrl+C`.
3. Run `ipconfig` in another terminal. Find the **IPv4 Address** under the connected Wi-Fi adapter.
4. On your phone, open `http://YOUR-WIFI-IP:3000` (for example, `http://192.168.1.120:3000`). Use the port shown by the development server if 3000 was already occupied.
5. Keep the terminal running while you preview. Saving files updates the preview automatically; `Ctrl+C` stops it.

If the phone cannot connect, check that both devices use the same network and Windows Firewall allows Node.js on your private network. On the phone, `localhost` points to the phone itself, so use the laptop's Wi-Fi address.

Check menu search, switching/minimizing/closing apps, scrolling through Skills and Projects, opening the resume PDF, and typing in Terminal and Contact with the phone keyboard visible. The Contact form uses your email app.

### Preview the production build locally

Run `npm run build`, then `npm start -- --hostname 0.0.0.0 --port 3001`. Open `http://localhost:3001` on your laptop or `http://YOUR-WIFI-IP:3001` on your phone. This checks the optimized production version without deploying it.

Reference: [Chrome device mode](https://developer.chrome.com/docs/devtools/device-mode), [Next.js local server options](https://nextjs.org/docs/app/api-reference/cli/next).

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
* Additional mobile interaction refinements
* Additional interactive cybersecurity demonstrations
* Enhanced window management features
