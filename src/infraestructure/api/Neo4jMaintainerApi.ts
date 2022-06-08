import { AxiosInstance } from "axios";
import { CreateNeo4jNodeRequest } from "../../core/application/adapter/CreateNeo4jNodeRequest";
import { GetNodeLabelsRequest } from "../../core/application/adapter/GetNodeLabelsRequest";
import { CreateNeo4jNodeDTO } from "../../core/application/dto/CreateNeo4jNodeDTO";
import AxiosClient from "./AxiosClient";

class Neo4jMaintainerApi implements CreateNeo4jNodeRequest, GetNodeLabelsRequest {

    constructor(private axios: AxiosInstance) { }
    
    getLabels(): Promise<string[]> {
        return this.axios
            .get('/neo4j/node/label')
            .then(response => response.data.data)
    }

    createNode(neo4jNode: CreateNeo4jNodeDTO): Promise<any> {
        return this.axios
            .post('/neo4j/node', neo4jNode)
            .then(response => response.data)
    }

}

const neo4jMaintainerService = new Neo4jMaintainerApi(AxiosClient)

export default neo4jMaintainerService