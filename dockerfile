FROM node:latest


COPY . .


RUN npm install
RUN npm run build


CMD ["node", "./dist/server/entry.mjs"]
EXPOSE 4321