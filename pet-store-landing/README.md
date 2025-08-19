# 🐾 Paws & Claws Pet Store Landing Page

A modern, responsive landing page for a pet store built with React and Vite.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **SEO Friendly**: Semantic HTML structure and proper meta tags

## Sections

- **Header**: Navigation with smooth scrolling
- **Hero**: Eye-catching banner with call-to-action buttons
- **Services**: Showcase of pet store services (supplies, grooming, health, boarding)
- **About**: Company information and statistics
- **Contact**: Contact information and contact form
- **Footer**: Links and social media

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   make install
   # or
   npm install
   ```

2. Start the development server:
   ```bash
   make dev
   # or
   npm run dev
   ```

3. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
make build
# or
npm run build
```

### Preview Production Build

```bash
make preview
# or
npm run preview
```

## Deployment

### Vercel
```bash
npx vercel --prod
```

### Netlify
```bash
npx netlify deploy --prod --dir=dist
```

### Other Platforms
The built files are in the `dist` folder and can be deployed to any static hosting service.

## Customization

- **Colors**: Update the CSS variables in `src/index.css`
- **Content**: Modify the text and information in the component files
- **Images**: Replace emoji placeholders with actual images
- **Contact Form**: Add form handling functionality as needed

## Project Structure

```
pet-store-landing/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── Makefile
```

## Technologies Used

- **React**: Frontend framework
- **Vite**: Build tool and development server
- **CSS3**: Styling with modern features
- **HTML5**: Semantic markup

## License

This project is open source and available under the [MIT License](LICENSE).