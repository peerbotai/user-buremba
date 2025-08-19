# 🐾 Pawsome Pet Store

A modern, responsive landing page for a pet store built for deployment on Cloudflare Pages.

## Features

- **Modern Design**: Clean, pet-friendly design with vibrant colors
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices  
- **Interactive Elements**: Smooth scrolling, animations, and mobile menu
- **Product Showcase**: Featured products with add-to-cart functionality
- **Services Section**: Highlight of pet care services offered
- **Contact Form**: Working contact form for customer inquiries
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Quick Start

1. **Setup Environment**:
   ```bash
   make setup-env
   ```
   Edit the `.env` file with your Cloudflare API token and Account ID.

2. **Install Dependencies**:
   ```bash
   make install
   ```

3. **Start Development Server**:
   ```bash
   make dev
   ```
   Visit http://localhost:3000 to view your site.

4. **Deploy to Cloudflare**:
   ```bash
   make login    # First time only
   make deploy
   ```

## Available Commands

- `make dev` - Start development server
- `make build` - Build the project  
- `make deploy` - Deploy to Cloudflare Pages
- `make preview` - Create preview deployment
- `make status` - Show project status
- `make clean` - Clean build artifacts
- `make help` - Show all available commands

## Project Structure

```
pet-store/
├── index.html      # Main HTML file
├── styles.css      # CSS styling
├── script.js       # JavaScript functionality  
├── wrangler.toml   # Cloudflare configuration
├── _headers        # HTTP headers configuration
├── _redirects      # URL redirect rules
├── Makefile        # Build and deployment commands
└── README.md       # This file
```

## Customization

- **Colors**: Update the CSS variables in `styles.css`
- **Content**: Edit `index.html` to change text and images
- **Domain**: Update `wrangler.toml` with your custom domain
- **Products**: Modify the product grid in the HTML file

## Deployment

This project is configured for Cloudflare Pages deployment with:

- **Automatic HTTPS**
- **Global CDN**
- **Custom Headers** for security
- **URL Redirects** for better navigation
- **Performance Optimization**

## License

This project is open source and available under the MIT License.