import { Json } from "sequelize/types/lib/utils";

export interface Domains {
    id?: number,
    domain_name?: string,
    domain_schema?: Json, 
    site_url?: string,
    created_at?: string, 
    updated_at?: string
    userId?: number
}