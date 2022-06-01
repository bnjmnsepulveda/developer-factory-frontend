
export interface CreateNeo4jNodeDTO{ 
    node: string;
    nodeName: string;
    nodeLabels: string[];
    nodeProperties: { key: string, value: string}[];
}