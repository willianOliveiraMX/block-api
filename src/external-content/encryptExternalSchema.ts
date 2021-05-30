import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';
import { createHmac } from 'crypto';


interface RestApiSchema {
    name?: string,
    description?: string,
    api_key?: string,
    api_secret: string
}

export const encryptExternalSchema = (schema: any): RestApiSchema => {
    console.log(schema);
    const { external_content_schema } = schema;

    if(!external_content_schema) {
        return schema;
    }

    const { api_key } = external_content_schema; 

    const secret = '@#402512';
    const hash = createHmac('sha256', secret)
                .update(api_key)
                .digest('hex');

    // const encriptedApi_key = (await promisify(scrypt)(passwordcripto, 'salt', 32)) as Buffer;
    // const encriptedAPi_cipher = createCipheriv('aes-256-ctr', encriptedApi_key, randomBytes(16));

    // const encryptedText = Buffer.concat([
    //     encriptedAPi_cipher.update(api_key),
    //     encriptedAPi_cipher.final(),
    // ]);
    
    console.log(hash);

    return schema;
}