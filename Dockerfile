# Copy workspace files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY lib/ ./lib/
COPY artifacts/ ./artifacts/

# RUN RECURSIVE INSTALL TO INSTALL SUB-PACKAGE DEPENDENCIES
RUN pnpm install --recursive --frozen-lockfile

# NOW RUN THE BUILD
RUN pnpm run build
