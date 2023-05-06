# create Dockerfile to build image of Node js alpine
FROM node:16-alpine
# Set the working directory to /app
WORKDIR /app

# Expose port 3000
EXPOSE 3000
ENV PATH /app/node_modules/.bin:$PATH
# Start the application
CMD [ "npm", "run", "dev" ]