## NodeJS application running on docker

Start app in development mode.Postgres database run on docker image while the app runs locally using postgres in docker

```make dev```


#### Cleanup docker images
This will remove postgres container created and app container if they are running and delete the containers.
It will also remove images created by ```docker build``` command
```make clean```