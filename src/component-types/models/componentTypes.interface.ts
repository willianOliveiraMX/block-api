import { Json } from "sequelize/types/lib/utils";

export interface ComponentTypesInterface {
    id?: number, 
    type_name?: string,
    type_schema?: Json,
    created_at?: string, 
    updated_at?: string,
}
