// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Prueba } = initSchema(schema);

export {
  Prueba
};