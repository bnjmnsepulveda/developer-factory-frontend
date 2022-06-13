import Neo4jMaintainerService from "../../../infraestructure/api/Neo4jMaintainerApi";
import { CreateNeo4jNodeDTO } from "../dto/CreateNeo4jNodeDTO";

export async function createNeo4jNode(neo4jNode: CreateNeo4jNodeDTO) {
    return Neo4jMaintainerService.createNode(neo4jNode)
}