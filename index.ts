import { writeFileSync, renameSync } from "fs";
import ejs from "ejs";
import { compile } from "json-schema-to-typescript";
import prettier from "prettier";

const schemas = [
  {
    type: "object",
    properties: {
      id: {
        type: "integer",
        format: "int64",
      },
    },
    modelName: "thingOne",
  },
];

export function convertJsonSchemaToTypescript(jsonSchema: any) {
  return compile(jsonSchema, jsonSchema.modelName);
}

function renderMyFile(fileIn: string, fileOut: string) {
  ejs.renderFile(
    fileIn,
    {
      schemas,
      convertJsonSchemaToTypescript,
      // in the real program I pass in a pile of data, and a pile of functions
      // to operate on that data. the templates decide how to use them all.
      // here i'm only passing in one piece of data and one function.
    },
    { async: true },
    async (err, renderedFileAsAString) => {
      if (err) {
        throw err;
      }

      const prettierRenderedString = prettier.format(
        await renderedFileAsAString,
        { parser: "typescript" }
      );

      writeFileSync(fileOut, await prettierRenderedString);
    }
  );
}

renderMyFile("file.ejs", "tempfile");

// I know this looks strange, but in my actual program i write everything to a
// temp directory, then move it all over to its final directory once it's
// finished, and I want to simulate that here.
renameSync("tempfile", "file.ts");
