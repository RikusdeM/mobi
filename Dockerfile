FROM node:16.3

WORKDIR /app

COPY . .

RUN npm install -g typescript@4.3.5
RUN tsc *.ts

EXPOSE 8080

CMD ["node", "routes.js"]