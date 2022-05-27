import { getAllNeo4jNodes } from "../../domain/service/getNeo4jNodes";

export function getSelectNodeNames() {
    return getAllNeo4jNodes().map(n => ({
        id: n.id,
        name: n.name
    }))
}