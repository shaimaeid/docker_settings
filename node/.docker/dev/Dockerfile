FROM node:16-alpine
# Create and define the node_modules's cache directory.
WORKDIR /cache

# install app dependencies
COPY package.json .
COPY package-lock.json .
RUN apk add --no-cache bash && \
    npm install --silent
# copy cached node_modules to app directory
RUN cp -a /cache/node_modules /app

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# Expose port 3000
EXPOSE 3000
COPY . .