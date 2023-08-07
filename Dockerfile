# Use the official Amazon Linux image as the base image
# FROM amazonlinux:latest
FROM node:lts

# Set environment variables for Node.js installation
# ENV NODE_VERSION=lts
ENV NODE_ENV=development

# Install system dependencies
# RUN yum update -y && \
#     yum install -y gcc-c++ make && \
#    curl -sL https://rpm.nodesource.com/setup_${NODE_VERSION} | bash -

# Install Node.js and npm
# RUN yum install -y nodejs

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install NestJS dependencies
RUN npm install

# Copy the NestJS application files to the container
COPY . .

# Expose the port on which your NestJS application is listening (change it to your app's port)
EXPOSE 8000

# Start the NestJS application
CMD [ "npm", "run", "start:dev" ]
