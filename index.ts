import { writeFileSync } from "fs";
import ejs from "ejs";
import { compile } from "json-schema-to-typescript";

const schemas = [
  {
    type: "object",
    properties: {
      id: {
        type: "integer",
        format: "int64",
      },
      modelName: "thingOne",
    },
  },
  {
    type: "object",
    properties: {
      name: {
        type: "string",
      },
    },
    modelName: "thingTwo",
  },
];

export async function convertJsonSchemaToTypescript(jsonSchema: any) {
  const interfaceText = await compile(jsonSchema, jsonSchema.modelName, {});
  return interfaceText;
}

function renderMyFile(fileIn: string, fileOut: string) {
  ejs.renderFile(
    fileIn,
    {
      schemas,
      convertJsonSchemaToTypescript,
    },
    {},
    (err, renderedString) => {
      if (err) {
        throw err;
      }
      writeFileSync(fileOut, renderedString);
    }
  );
}

renderMyFile("file.ejs", "file.js");
