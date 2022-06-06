import { writeFileSync, renameSync } from "fs";
import ejs from "ejs";
import { compile } from "json-schema-to-typescript";
import prettier from "prettier";

const schemas = {
  thingOne: {
    type: "object",
    properties: {
      id: {
        type: "integer",
        format: "int64",
      },
      name: {
        type: "array",
        items: {
          tsType: "thingTwo",
        },
      },
    },
    modelName: "thingOne",
  },
  thingTwo: {
    type: "object",
    properties: {
      name: {
        type: "string",
      },
    },
    modelName: "thingTwo",
  },
};

export function convertJsonSchemaToTypescript(jsonSchema: any) {
  return compile(jsonSchema, jsonSchema.modelName);
}

function renderMyFile(fileIn: string, fileOut: string) {
  ejs.renderFile(
    fileIn,
    {
      schemas,
      convertJsonSchemaToTypescript,
    },
    { async: true },
    async (err, renderedFileAsAString) => {
      if (err) {
        throw err;
      }

      const prettierRenderedString = prettier.format(
        await renderedFileAsAString,
        {
          parser: "typescript",
        }
      );

      writeFileSync(fileOut, await prettierRenderedString);
    }
  );
}

renderMyFile("file.ejs", "tempfile");
renameSync("./tempfile", "./file.ts");
// I know this looks strange, but in my actual program i write everything to a
// temp directory, then move it all over to its final directory once it's
// finished, and I want to simulate that here.
