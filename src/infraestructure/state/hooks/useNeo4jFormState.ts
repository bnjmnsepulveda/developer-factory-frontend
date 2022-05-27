import { RootState } from "../store";
import { useDispatch, useSelector } from 'react-redux';
import { NodeProperties, setNode, setNodeLabels, setNodeName, addNodeProperties } from "../ducks/neo4j-form.duck";

export function useNeo4jFormState() {
    
    const dispatch = useDispatch()
    const { node, nodeName, nodeLabels, properties } = useSelector((state: RootState) => state.neo4jForm)

    return {
        node,
        nodeName,
        nodeLabels,
        nodeProperties: properties,
        setNode: (payload: string) => dispatch(setNode(payload)),
        setNodeName: (payload: string) => dispatch(setNodeName(payload)),
        setNodeLabels: (payload: string[]) => dispatch(setNodeLabels(payload)),
        addNodeProperties: (payload: NodeProperties) => dispatch(addNodeProperties(payload))
    }
}