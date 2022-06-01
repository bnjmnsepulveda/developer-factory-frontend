import { AxiosInstance } from "axios";
import { CreateNeo4jNodeRequest } from "../../core/application/adapter/CreateNeo4jNodeRequest";
import { CreateNeo4jNodeDTO } from "../../core/application/dto/CreateNeo4jNodeDTO";
import AxiosClient from "./AxiosClient";

class Neo4jMaintainerApi implements CreateNeo4jNodeRequest {

    constructor(private axios: AxiosInstance) { }

    request(neo4jNode: CreateNeo4jNodeDTO): Promise<any> {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        return this.axios
            .post('/neo4j/node', {
                name: neo4jNode.nodeName,
                node: neo4jNode.node
            }, config)
            .then(response => response.data)
    }

}

const neo4jMaintainerService = new Neo4jMaintainerApi(AxiosClient)

export default neo4jMaintainerService