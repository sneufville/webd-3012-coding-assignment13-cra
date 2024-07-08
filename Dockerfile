FROM node:20-alpine
LABEL authors="sneufville"

# Set the working directory
WORKDIR /neufville_simon_ui_garden_build_checks
# set the path
ENV PATH /neufville_simon_ui_garden_build_checks/node_modules/.bin:$PATH

# Copy package and lock files
COPY package.json .
COPY package-lock.json .

# Install dependencies silently
RUN npm install --silent

# Copy all files to destination
COPY . .

# Expose port
EXPOSE 8018

# Start storybook
CMD ["npm", "run", "storybook"]
