#!/bin/bash
cd /app
node -v
npm -v
export NODE_ENV=DEV
npm install . --production && node /app/index.js
