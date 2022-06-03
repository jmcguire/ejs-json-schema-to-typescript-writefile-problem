This is a repo to demonstrate a problem I'm having.

# Problem Background

I'm trying to get **writeFileSync**, **ejs**, and **json-schema-to-typescript** to work together, and I'm not very good with Javascript async.

My goal is to generated Typescript code from JSON Schema, and write in to a file. JSON Schema has ways to write files directly, but I'd to be able to create the interfaces from within an EJS template, to give me flexibility to put more stuff in that file.

This is a _severly_ reduced version of a complicated piece of code, but it does demonstrate the exact problem in two nice files: `index.ts` and `file.ejs`.

# Requirements

You need to have node installed.

# Setup

Set it up with `./setup.sh`

# Run the test

Run the code with `./go.sh`

I want to see two interfaces.

What I actually see is two promises.

I don't know how to fix this.
