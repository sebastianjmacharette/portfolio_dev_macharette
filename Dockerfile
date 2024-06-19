FROM node:18-alpine

WORKDIR /app/portfolio_dev_macharette

COPY portfolio/portfolio_dev_macharette/package*.json ./

RUN npm install

COPY portfolio/portfolio_dev_macharette/ .

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev"]
