FROM node:current-alpine3.12 

RUN apk add --no-cache --update git bash 

RUN git clone https://github.com/Taljjaa/PlayItForward-Client.git app

WORKDIR /app

RUN npm install 

CMD ["npm", "start"] 