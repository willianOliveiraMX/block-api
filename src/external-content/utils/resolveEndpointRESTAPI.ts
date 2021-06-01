export const resolveEndpointRESTAPI = (endpoint: string, params: {name: string, content: string}[]): string => {
    if (!params.length) return endpoint;

    const paramsString = params.map(param => param.name + '=' + param.content).join('&');
    return `${endpoint}?${paramsString}`;
}