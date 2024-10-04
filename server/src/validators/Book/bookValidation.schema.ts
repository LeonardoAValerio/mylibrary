import Ajv, { JSONSchemaType } from 'ajv';
const ajv = new Ajv();

// Definindo um tipo e um JSON Schema para o objeto Book
interface Book {
  title: string;
}

const bookSchema: JSONSchemaType<Book> = {
  type: "object",
  properties: {
    title: { type: "string" }
  },
  required: ["title"],
  additionalProperties: false,
};

export const validateJSONBook = ajv.compile(bookSchema);