#!/bin/bash
cd /app
node -v
npm -v
npm install . --production && node /app/index.js
