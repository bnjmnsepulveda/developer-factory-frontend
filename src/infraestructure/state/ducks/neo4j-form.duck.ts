import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface NodeProperties {
  key: string;
  value: string;
}

export interface Neo4jFormState {
  node: string;
  nodeName: string;
  nodeLabels: string[];
  properties: NodeProperties[];
}

const initialState: Neo4jFormState = {
    node: '',
    nodeName: '',
    nodeLabels: [],
    properties: []
}

export const neo4jForm = createSlice({
  name: 'neo4jForm',
  initialState,
  reducers: {
    setNode:(state, action: PayloadAction<string>) => {
      state.node = action.payload
   }, 
    setNodeName: (state, action: PayloadAction<string>) => {
       state.nodeName = action.payload
    },
    setNodeLabels: (state, action: PayloadAction<string[]>) => {
      state.nodeLabels = action.payload
    },
    addNodeProperties: (state, action: PayloadAction<NodeProperties>) => {
      const properties = state.properties.filter(p => p.key !== action.payload.key)
      state.properties = [
        ...properties,
        action.payload
      ]
    },
    resetNodeProperties: (state) => {
      state.properties = []
    }
  },
})

// Action creators are generated for each case reducer function
export const { setNodeName, setNodeLabels, setNode, addNodeProperties, resetNodeProperties } = neo4jForm.actions

export default neo4jForm.reducer
