import { RootState } from "../store";
import { useDispatch, useSelector } from 'react-redux';
import { setNode, setNodeLabels, setNodeName } from "../ducks/neo4j-form.duck";

export function useNeo4jFormState() {
    
    const dispatch = useDispatch()
    const { node, nodeName, nodeLabels } = useSelector((state: RootState) => state.neo4jForm)

    return {
        node,
        nodeName,
        nodeLabels,
        setNode: (payload: string) => dispatch(setNode(payload)),
        setNodeName: (payload: string) => dispatch(setNodeName(payload)),
        setNodeLabels: (payload: string[]) => dispatch(setNodeLabels(payload))
    }
}