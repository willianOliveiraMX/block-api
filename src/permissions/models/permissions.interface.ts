export interface Permissions {
    id?: number, 
    users?: number,
    name?: string,
    module_reference?: string,
    read?: boolean,
    update?: boolean,
    delete?: boolean,
    create?: boolean
}