import { Json } from "sequelize/types/lib/utils";

export interface PagesInterface {
    id?: number,
    route_name?: string,
    domains?: number,
    page_config_components_schema?: Json,
    created_at?: string, 
    updated_at?: string,
}
