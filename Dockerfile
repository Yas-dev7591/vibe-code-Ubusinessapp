FROM node:20-alpine
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy all project files into the build container
COPY . .

# Install all workspace dependencies
RUN pnpm install

# Build the workspace project
RUN pnpm run build

# Expose port and start the application
EXPOSE 3000
CMD ["pnpm", "start"]
