import { generateClient } from "aws-amplify/api";

import { createPrueba } from "../graphql/mutations";

async function hmmm(){
    const client = generateClient();

    const result = await client.graphql({
        query: createPrueba,
        variables:{
            input:{
                nombre: 'ñaaaaaaam'
            }
        }
    });
}

export default hmmm;