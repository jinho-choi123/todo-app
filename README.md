
# Todo App

This project is simple todo app made of Express, Next, MongoDB. User can create/update/delete/check their Todos.




## Tech Stack

**Client:** Next.js

**Server:** Express.js

**DB:** MongoDB



## Installation with Docker

**.env file**
```dotenv
  MONGO_PASSWORD=longlongpassword
```

**docker-compose.yml**
```
version: "3.9"
services:
  nginx:
    image: nginx:latest
    container_name: nginx
    restart: always
    ports:
      - 3000:3000
      - 9000:9000
  backend:
    image: node:16.17.0
    container_name: backend
    command: 'tail -f /dev/null'
  frontend:
    container_name: frontend
    image: node:16.17.0
    command: 'tail -f /dev/null'
  mongo:
    image: mongo:6.0.1
    container_name: mongo
    restart: always
    environment:
          MONGO_INITDB_ROOT_USERNAME: root
          MONGO_INITDB_ROOT_PASSWORD: "${MONGO_PASSWORD}"
  mongoI:
    image: mongo-express:latest
    ports: 
      - 8081:8081
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: root
      ME_CONFIG_MONGODB_ADMINPASSWORD: "${MONGO_PASSWORD}"
      ME_CONFIG_MONGODB_SERVER: mongo
    restart: always
```
**reverse-proxy.conf**
```
upstream docker-backend {
    server backend:9000;
}
upstream docker-frontend {
    server frontend:3000;
}

server {
    listen       3000;

    location ^~ /api/ {
        proxy_pass http://docker-backend/;
    }

    location / {
        proxy_pass http://docker-frontend/;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

}

```

1. Change .env MONGO_PASSWORD content to complicated password.  
2. Put .env file and docker-compose.yml file in same directory and run the following command. 
```
$ docker compose --env-file ./.env up -d
``` 
3. Go to nginx container and add reverse-proxy.conf file to /etc/nginx/conf.d directory.
4. Run the following command inside NginX container to reload nginx settings.  
```
$ service nginx reload 
```
5. Go to backend container and clone todo backend repo(fork https://gitlab.com/jinho-choi123/todo-app.git). 
```
$ git clone https://gitlab.com/<Username>/todo-app.git
```
6. Make .env file at directory where index.js exist. Refer to .env.example file, and fill out .env file.
7. run the following command at directory where package.json exist.
```
$ npm install
```
8. run the following command to run backend server.  
```
$ npm start
```
9. Go to frontend container and clone todo frontend repo(fork https://gitlab.com/jinho-choi123/todo-frontend.git)
```
$ git clone https://gitlab.com/<Username>/todo-frontend.git
```
10. run the following command at directory where package.json exists.
```
$ npm install
```
11. run npm start to run backend server.  
```
$ yarn dev
```