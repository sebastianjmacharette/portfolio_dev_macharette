FROM node:18-alpine

WORKDIR /app/portfolio_dev_macharette

COPY /portfolio_dev_macharette/package*.jason ./

RUN npm install

COPY portfolio_dev_macharette/ .. 

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev"]

