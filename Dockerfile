FROM node:10-alpine

COPY package.json .
COPY yarn.lock .
RUN npm install --frozen-lockfile

COPY . .

CMD yarn test
