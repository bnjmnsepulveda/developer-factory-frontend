import Neo4jMaintainerService from "../../../infraestructure/api/Neo4jMaintainerApi";
import { CreateNeo4jNodeDTO } from "../dto/CreateNeo4jNodeDTO";

export async function createNeo4jNode(neo4jNode: CreateNeo4jNodeDTO) {
    let response = null
    try {
        response = await Neo4jMaintainerService.request(neo4jNode)
    } catch (error) {
        return null
    }
    return response
}