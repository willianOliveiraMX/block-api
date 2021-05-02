import { Json } from "sequelize/types/lib/utils";

export interface ComponentInterface {
    id?: number,
    title?: string,
    type?: number,
    user_owner?: number,
    data_schema?: Json,
    is_active?: boolean,
    is_public?: boolean,
    analitics_source?: Json,
    config_schema?: Json,
    is_free?: boolean,
    rent_price?: string,
    created_at?: string, 
    updated_at?: string,
};