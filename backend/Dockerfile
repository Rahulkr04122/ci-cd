# Use Node.js 22 Alpine (lightweight)
FROM --platform=linux/amd64 node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy all source code
COPY . .

# Expose port
EXPOSE 5000

# Start the app
CMD ["node", "src/index.js"]