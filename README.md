# memorize

for study

---

### Done :

> 1. set aws EC2 instance

> 2. install docker
>    > - https://tech.ktcloud.com/84

```
curl -fsSL https://get.docker.com/ | sudo sh
```

> 3. install docker-compose
>    >

```linux
 sudo curl -L "https://github.com/docker/compose/releases/download/v2.6.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

 sudo chmod +x /usr/local/bin/docker-compose

 sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

> > check if docker is installed well

```
docker version
docker-compose version
```

> 4. install postgresql
>    > - pull postgresql docker image

```
docker pull postgres

(check)
docker image ls
```

> > - edit file docker-compose.yml

```yaml
version: '3'
services:
  db:
    image: postgres:latest
    container_name: postgres
    restart: always
    ports:
      - '5432:5432'
    environment:
      POSTGRES_USER: '[username]'
      POSTGRES_PASSWORD: '[password]'
    volumes:
      - /[current location ex) pwd]/data:/var/lib/postgresql/data
```

> 5.  run DB
>     >

```
docker-compose up -d db

(if you wanna check db in terminal)
docker exec -it postgres /bin/bash
```

### TODO :

> 6. parse pdf data into formatted .txt file

> 7. add data into db (build DB structure)

> 8.
