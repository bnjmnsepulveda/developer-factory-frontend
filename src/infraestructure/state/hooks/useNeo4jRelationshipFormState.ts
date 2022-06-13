import { RootState } from "../store";
import { useDispatch, useSelector } from 'react-redux';
import { setName, setNodeA, setNodeB } from "../ducks/neo4j-relationship-form.duck";

export function useNeo4jRelationshipFormState() {
    
    const dispatch = useDispatch()
    const { name, nodeA, nodeB } = useSelector((state: RootState) => state.neo4jRelationshipForm)

    return {
        name, 
        nodeA, 
        nodeB,
        setName: (payload: string) => dispatch(setName(payload)),
        setNodeA: (payload: string) => dispatch(setNodeA(payload)),
        setNodeB: (payload: string) => dispatch(setNodeB(payload)),
    }
}