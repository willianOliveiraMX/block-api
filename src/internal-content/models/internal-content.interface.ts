import { Json } from "sequelize/types/lib/utils";

export interface InternalContent {
    id?: number,
    title?: string, 
    fields?: Json,
    text?: string,
    is_active?: boolean,
    content_meta?: Json,
    user_owner?: number,
    pages_id?: number,
    created_at?: string, 
    updated_at?: string
}