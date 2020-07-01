FROM node:14.4.0-alpine3.10

COPY package.json .
COPY yarn.lock .
RUN npm install --frozen-lockfile

COPY . .

CMD yarn test
