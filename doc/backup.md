# Backup mongo-data

## backup to .tar.gz

`NAME={{DOCKER_VOLUME_NAME}}`
```VOLUME=(`docker volume inspect $NAME | jq '.[0].Mountpoint' -r`)```
`tar -C $VOLUME . -czvf $NAME.tar.gz`

You have now the .tar.gz file in your current dir.

## restore backup

`docker-compose up something_wrong`
```VOLUME=(`docker volume inspect $NAME | jq '.[0].Mountpoint' -r`)```
`tar -zxvf $NAME.tar.gz -C $VOLUME`
