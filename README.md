# Skynet Ops Audit Service

Mini backend service for storing operational events.

Endpoints:

GET /health
POST /events
GET /events

Run locally:

node server.js

Run with Docker:

docker build -t skynet-ops .
docker run -p 3000:3000 skynet-ops

Health endpoint:

http://localhost:3000/health
