import Ajv, { JSONSchemaType } from 'ajv';
import ajvErrors from 'ajv-errors';
import { UserAttributes } from '../../models/User';

const ajv = new Ajv({
  allErrors: true,
  verbose: true,
});

ajvErrors(ajv /*,{ singleError: true }*/);

const userSchema: JSONSchemaType<UserAttributes> = {
  type: "object",
  properties: {
    id: {
      type: "string",
      errorMessage: { type: "Invalid id: type String" }
    },
    name: {
      type: "string",
      errorMessage: { type: "Invalid title: type String" }
    },
    email: {
      type: "string",
      errorMessage: { type: "Invalid synopse: type String" }
    },
    password: {
      type: "string",
      errorMessage: { type: "Invalid review: type String" }
    },
  },
  required: ["id", "name", "email", "password"],
  additionalProperties: false,
};

export const validateJSONUser = ajv.compile(userSchema);