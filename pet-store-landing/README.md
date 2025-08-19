# Pet Store Landing Page

A modern, responsive landing page for a pet store built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Animations**: Smooth transitions and hover effects throughout the site
- **Interactive Elements**: Mobile menu, smooth scrolling, form validation
- **Pet Showcase**: Dedicated sections for different types of pets
- **Services Overview**: Information about pet care services
- **Contact Form**: Working contact form with validation
- **Kubernetes Ready**: Configured for deployment with Skaffold

## Project Structure

```
pet-store-landing/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript interactions
├── Dockerfile          # Docker configuration
├── nginx.conf          # Nginx configuration
├── skaffold.yaml       # Skaffold configuration
└── k8s/                # Kubernetes manifests
    ├── deployment.yaml
    ├── service.yaml
    └── ingress.yaml
```

## Local Development

1. Open `index.html` in a web browser to view the site locally
2. Make changes to HTML, CSS, or JavaScript files as needed

## Deployment with Skaffold

### Prerequisites
- Docker installed and running
- Kubernetes cluster (minikube, kind, or cloud provider)
- Skaffold installed

### Deploy to Kubernetes

1. Navigate to the project directory:
   ```bash
   cd pet-store-landing
   ```

2. Run Skaffold in development mode:
   ```bash
   skaffold dev
   ```

   This will:
   - Build the Docker image
   - Deploy to your Kubernetes cluster
   - Set up port forwarding to localhost:8080
   - Watch for file changes and redeploy automatically

3. Access the application at `http://localhost:8080`

### Production Deployment

For production deployment, use:
```bash
skaffold run
```

## Customization

### Colors
The main brand color is `#8B4513` (saddle brown). You can change this throughout the CSS file to match your brand.

### Content
- Update pet information in the HTML
- Modify contact details in the contact section
- Add real images by replacing the emoji placeholders

### Services
Add or modify services in the services section to match your business offerings.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Optimized CSS with efficient selectors
- Minimal JavaScript for better performance
- Responsive images and modern CSS techniques
- Nginx caching configuration for static assets

## Security Features

- Security headers configured in Nginx
- Form validation to prevent invalid submissions
- No external dependencies for better security