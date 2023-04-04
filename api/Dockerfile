FROM node:lts-alpine
ENV NODE_ENV=production
ENV DB_PASSWORD=portfolioApi
ENV DB_HOST=/cloudsql/fm9408portfolio:us-east1:henry-portfolio-database
ENV DB_USER=portfolio
ENV DB_NAME=portfolio
ENV BASE_URL=https://fm9408portfolio.web.app
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3001
EXPOSE 8080
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
