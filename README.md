This is a repo to demonstrate a problem I'm having.

# Problem Background

I'm trying to get **writeFileSync**, **renameSync**, **ejs**,**json-schema-to-typescript**, and **prettier** to work together, and I'm not good with Javascript async code.

My goal is to generate Typescript code from a JSON Schema, and write it to a file.

JSON Schema has ways to write files directly, but I'd _like_ to be able to create the Typescript code from within an EJS template, to give me flexibility to put more stuff in that file.

Note: This is a _severly_ reduced version of a complicated piece of code I'm working on, but it does demonstrate the exact problem in one typescript file and two EJS files: `index.ts`, `file.ejs`, and `interface.ejs`.

# Requirements

You need to have node installed.

# Setup

Set it up with `./setup.sh`

# Run the test

Run the code with `./go.sh`

I want to see two interfaces.

The renameSync line isn't working. When it's not there, the tempfile is produced and had the correct code. When the line is there, the program fails with a `Error: ENOENT: no such file or directory, rename './tempfile' -> './file.ts'` error.

# Update

I keep making the problem more complicated.
