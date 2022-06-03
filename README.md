This is a repo to demonstrate a problem I'm having.

# Problem Background

I'm trying to get **writeFileSync**, **ejs**, and **json-schema-to-typescript** to work together, and I'm not good with Javascript async code.

My goal is to generate Typescript code from a JSON Schema, and write it to a file.

JSON Schema has ways to write files directly, but I'd _like_ to be able to create the Typescript code from within an EJS template, to give me flexibility to put more stuff in that file.

Note: This is a _severly_ reduced version of a complicated piece of code I'm working on, but it does demonstrate the exact problem in two little files: `index.ts` and `file.ejs`.

# Requirements

You need to have node installed.

# Setup

Set it up with `./setup.sh`

# Run the test

Run the code with `./go.sh`

I want to see two interfaces.

What I actually see is two promises.

I don't know how to fix this.
