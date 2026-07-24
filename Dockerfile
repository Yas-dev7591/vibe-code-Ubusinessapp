FROM node:20-alpine
WORKDIR /app

# Copy package files first for dependency caching
COPY package.json pnpm-lock.yaml* ./

# Install pnpm and dependencies
RUN npm install -g pnpm
RUN pnpm install

# Copy the rest of your project files
COPY . .

# Build the project if a build script exists
RUN pnpm run build --if-present

# Expose port and start the application
EXPOSE 3000
CMD ["pnpm", "start"]
