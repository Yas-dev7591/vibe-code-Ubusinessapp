FROM node:20-alpine AS base
RUN npm install -g pnpm

WORKDIR /app

# Copy root workspace configuration and package files
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY artifacts/ ./artifacts/
# (Copy other workspace package folders as needed, e.g., lib/, apps/, etc.)

# Install all dependencies across the monorepo workspace
RUN pnpm install

# Copy the rest of the source code
COPY . .

# Build the project
RUN pnpm build

# Expose port and start
EXPOSE 3000
CMD ["pnpm", "--dir", "artifacts/api", "run", "dev"]
