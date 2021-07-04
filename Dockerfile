FROM node:16.3

WORKDIR /app

COPY . .

RUN npm install -g typescript
RUN tsc webserver.ts

EXPOSE 8080

CMD ["node", "webserver.js"]