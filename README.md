# Webpack Template

A simple, modern Webpack starter template for JavaScript projects.

## Features
- Webpack 5 with separate configs for development and production
- CSS and image asset support
- ESLint for code quality
- Live-reloading dev server
- HTML template integration

## Folder Structure
```
webpack-template/
├── dist/              # Build output
├── src/               # Source files
│   ├── index.js       # Main JS entry
│   ├── greeting.js    # Example module
│   ├── styles.css     # Styles
│   ├── template.html  # HTML template
│   └── cat.jpg        # Example image
├── webpack.common.js  # Shared Webpack config
├── webpack.dev.js     # Development config
├── webpack.prod.js    # Production config
├── package.json       # Project metadata & scripts
├── .gitignore         # Git ignore rules
└── README.md          # Project info
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```

## Linting
- Run `npm run lint` to check code quality.
- Run `npm run lint:fix` to auto-fix issues.

## Customization
- Edit `src/` files to add your code, styles, and assets.
- Update Webpack configs as needed for your project.

## License
MIT
