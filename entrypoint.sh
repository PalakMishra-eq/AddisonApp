#!/bin/sh

if [ -n "$VAULT_GITHUB_TOKEN" ]; then
  mkdir -p ssl
  vault login -field=token_policies -method=github token=$VAULT_GITHUB_TOKEN
  vault read -field=value $VAULT_APPLICATION_PATH/sslkey > ./ssl/server.key
  vault read -field=value $VAULT_APPLICATION_PATH/sslcert > ./ssl/server.crt
  vault read -field=value $VAULT_APPLICATION_PATH/dotenv > ./.env
fi

export NODE_PATH=$PWD
node server.js
