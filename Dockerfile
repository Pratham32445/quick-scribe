# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your Vite app runs on (usually 5173)
EXPOSE 5173

# Define the command to run your application in development mode
CMD ["npm", "run", "dev"]