#!/bin/bash

echo "Creating new build";
yarn run build || echo "build failed."
cp -r build ../qa-server/dist || echo "Copying Failed."
echo "Task Completed."
