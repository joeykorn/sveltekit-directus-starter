#!/bin/bash

docker exec -it directus npx directus schema apply --yes /directus/snapshots/schema.yaml
docker compose restart
