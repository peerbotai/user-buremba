.PHONY: install dev build deploy clean preview

# Variables
PROJECT_NAME = pet-store
DIST_DIR = dist

# Install dependencies
install:
	@echo "Installing Wrangler CLI..."
	@if ! command -v wrangler &> /dev/null; then \
		npm install -g wrangler; \
	fi
	@echo "Wrangler is ready!"

# Development server
dev:
	@echo "Starting development server..."
	wrangler pages dev . --port 3000

# Build the project
build:
	@echo "Building project..."
	@mkdir -p $(DIST_DIR)
	@cp -r *.html *.css *.js _headers _redirects $(DIST_DIR)/ 2>/dev/null || true
	@echo "Build complete!"

# Deploy to Cloudflare Pages
deploy:
	@echo "Deploying to Cloudflare Pages..."
	@if [ ! -f .env ]; then \
		echo "Error: .env file not found. Please run 'make setup-env' first."; \
		exit 1; \
	fi
	@source .env && wrangler pages deploy . --project-name $(PROJECT_NAME)

# Preview deployment
preview:
	@echo "Creating preview deployment..."
	wrangler pages deploy . --project-name $(PROJECT_NAME) --compatibility-date 2024-08-19

# Setup environment variables
setup-env:
	@echo "Setting up environment variables..."
	@if [ ! -f .env ]; then \
		echo "# Cloudflare API Token" > .env; \
		echo "CLOUDFLARE_API_TOKEN=" >> .env; \
		echo "CLOUDFLARE_ACCOUNT_ID=" >> .env; \
		echo ""; \
		echo "Please edit .env file and add your Cloudflare API token and Account ID"; \
		echo "You can find these at: https://dash.cloudflare.com/profile/api-tokens"; \
	else \
		echo ".env file already exists"; \
	fi

# Clean build artifacts
clean:
	@echo "Cleaning build artifacts..."
	@rm -rf $(DIST_DIR)
	@echo "Clean complete!"

# Login to Cloudflare
login:
	@echo "Logging in to Cloudflare..."
	wrangler auth login

# Show project status
status:
	@echo "Project: $(PROJECT_NAME)"
	@echo "Files:"
	@ls -la *.html *.css *.js 2>/dev/null || echo "  No web files found"
	@echo ""
	@echo "Config files:"
	@ls -la wrangler.toml _headers _redirects .env 2>/dev/null || echo "  Some config files missing"

# Help
help:
	@echo "Available commands:"
	@echo "  make install    - Install Wrangler CLI"
	@echo "  make dev        - Start development server"
	@echo "  make build      - Build the project"
	@echo "  make deploy     - Deploy to Cloudflare Pages"
	@echo "  make preview    - Create preview deployment"
	@echo "  make setup-env  - Setup environment variables"
	@echo "  make login      - Login to Cloudflare"
	@echo "  make status     - Show project status"
	@echo "  make clean      - Clean build artifacts"
	@echo "  make help       - Show this help"