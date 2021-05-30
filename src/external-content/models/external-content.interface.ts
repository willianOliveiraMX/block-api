import { Json } from "sequelize/types/lib/utils";

export interface ExternalContentInterface {
    id?: number,
    title?: string,
    config_schema?: Json,
    external_content_type?: number, 
    external_content_schema?: Json,
    user_owner?: number,
    pages_id?: number,
    created_at?: string, 
    updated_at?: string,
}