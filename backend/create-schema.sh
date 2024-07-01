#!/bin/bash

docker exec -it directus npx directus schema snapshot --yes /directus/snapshots/schema.yaml
