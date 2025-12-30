# Nail Studio Landing Page

A modern, responsive landing page for a luxury nail studio built with React, TypeScript, and Vite. Features beautiful animations, interactive booking forms, and a stunning gallery showcase.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Interactive Booking System**: Multi-step booking form with date/time selection
- **Image Gallery**: Showcase of nail art designs and studio interior
- **Service Showcase**: Detailed service listings with pricing
- **Mobile Responsive**: Fully optimized for all device sizes
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - Accessible component primitives
- **React Hook Form** - Form management
- **Lucide React** - Icons

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## 🏃 Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/artgolwebdev/nailstudio.git
   cd nailstudio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - The app will automatically open at `http://localhost:3000`

## 🏗️ Building for Production

```bash
npm run build
```

The production build will be created in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## 📦 Deployment to GitHub Pages

This project is configured for GitHub Pages deployment.

### Automatic Deployment (Recommended)

1. **Enable GitHub Pages in repository settings**
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `root`

2. **Set up GitHub Actions** (optional)
   - Create `.github/workflows/deploy.yml` for automatic deployment on push

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder**
   - Use GitHub Pages to serve from the `dist` directory
   - Or use a tool like `gh-pages`:
     ```bash
     npm install --save-dev gh-pages
     npm run build
     npx gh-pages -d dist
     ```

The site will be available at: `https://artgolwebdev.github.io/nailstudio`

## 📁 Project Structure

```
nailstudio/
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   └── ...          # Page sections
│   ├── styles/          # Global styles
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── public/              # Static assets
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies
```

## 🎨 Design

Original design from Figma: [Nail Studio Landing Page](https://www.figma.com/design/kmIl3Zb1nQK8KwR4qvJiVz/Nail-Studio-Landing-Page)

## 📝 License

This project uses components from [shadcn/ui](https://ui.shadcn.com/) under [MIT license](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md).

Photos from [Unsplash](https://unsplash.com) used under [Unsplash License](https://unsplash.com/license).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please open an issue on GitHub.
