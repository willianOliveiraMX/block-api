import { Json } from "sequelize/types/lib/utils";

export class ExternalContentTypeInterface {
    id?: number;
    name?: string;
    description?: string;
    config_schema?: Json;
    created_at?: string;
    updated_at?: string;
}
