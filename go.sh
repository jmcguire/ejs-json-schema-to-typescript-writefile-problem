if [ -f tempfile ]; then
  echo "rm tempfile"
  rm tempfile
fi

if [ -f file.ts ]; then
  echo "rm file.ts"
  rm file.ts
fi

echo "npx tsc" && npx tsc \
  && echo "node index.js" && node index.js \
  && echo "cat file.ts, you should see two interfaces" && cat file.ts

