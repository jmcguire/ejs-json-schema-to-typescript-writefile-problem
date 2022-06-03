echo "npx tsc" && npx tsc \
  && echo "node index.js" && node index.js \
  && echo "cat file.ts, you should see two interfaces" && cat file.ts

