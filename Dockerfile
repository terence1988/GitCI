# COMMANDx argument
# Normally we name the docker img with a tag name
FROM node:14


#optional WORKDIR
WORKDIR /app
#ADD files

#ADD package.json package.json
#ADD/COPY  -- when add zip files, the file will be extracted into the target folder
COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY src src
COPY test test

#node_modules have c/c++ which is platform depended -- all packages were compiled
RUN npm install -g ts-node typescript
RUN npm install
#RUN npm start
RUN npm audit fix


ENTRYPOINT [ "npm","start" ]
#ENTRYPOINT ["npm","run","ts-node","--files","src/index.ts" ]
# docker will always rebuild the image if upper command result has diff signal


#docker-compose exec restful bash