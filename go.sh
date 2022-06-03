echo "npx tsc" && npx tsc \
  && echo "node index.js" && node index.js \
  && echo "cat file.js, you should see two interfaces" && cat file.js

