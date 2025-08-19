.PHONY: install dev build preview clean

# Install dependencies
install:
	npm install

# Start development server
dev: install
	npm run dev

# Build for production
build: install
	npm run build

# Preview production build
preview: build
	npm run preview

# Clean dependencies and build files
clean:
	rm -rf node_modules dist

# Deploy to Vercel (requires vercel CLI)
deploy: build
	@echo "To deploy to Vercel, run: npx vercel --prod"

# Deploy to Netlify (requires netlify CLI)
deploy-netlify: build
	@echo "To deploy to Netlify, run: npx netlify deploy --prod --dir=dist"