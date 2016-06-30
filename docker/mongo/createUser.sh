#!/bin/bash

mongod &

RET=1
while [[ RET -ne 0 ]]; do
    echo "=> Waiting for confirmation of MongoDB service startup"
    sleep 5
    mongo admin --eval "help" >/dev/null 2>&1
    RET=$?
done

ADMINUSER=$MONGO_ADMIN_USER
ADMINPASS=$MONGO_ADMIN_PASSWORD

# echo "=> Creating an admin user in MongoDB"
mongo familytree --eval "db.createUser(
  {
    user: '$ADMINUSER',
    pwd: '$ADMINPASS',
    roles: [
      {
        role: 'readWrite',
        db: 'familytree'
      }
    ]
  }
);"

mongod --shutdown
