import Ajv, { JSONSchemaType } from 'ajv';
import ajvErrors from 'ajv-errors';
import { BookAttributes } from '../../models/Book';
import { StatesBook } from '../../helpers/StatesBookEnum';

const ajv = new Ajv({
  allErrors: true,
  verbose: true,
});

ajvErrors(ajv /*,{ singleError: true }*/);

const bookSchema: JSONSchemaType<BookAttributes> = {
  type: "object",
  properties: {
    id: {
      type: "string",
      errorMessage: { type: "Invalid id: type String" }
    },
    title: {
      type: "string",
      errorMessage: { type: "Invalid title: type String" }
    },
    synopse: {
      type: "string",
      nullable: true,
      errorMessage: { type: "Invalid synopse: type String" }
    },
    review: {
      type: "string",
      nullable: true,
      errorMessage: { type: "Invalid review: type String" }
    },
    urlImage: {
      type: "string",
      nullable: true,
      errorMessage: { type: "Invalid urlImage: type String" }
    },
    status: {
      type: "string",
      enum: Object.values(StatesBook),
      nullable: true,
      errorMessage: { type: "Invalid status: type String" }
    },
    rating: {
      type: "number",
      nullable: true,
      errorMessage: { type: "Invalid status: type Number" }
    },
  },
  required: ["title"],
  additionalProperties: false,
};

export const validateJSONBook = ajv.compile(bookSchema);