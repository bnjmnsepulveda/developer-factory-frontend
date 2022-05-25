import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Neo4jFormState {
  node: string;
  nodeName: string;
  nodeLabels: string[];
}

const initialState: Neo4jFormState = {
    node: '',
    nodeName: '',
    nodeLabels: []
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
    }
  },
})

// Action creators are generated for each case reducer function
export const { setNodeName, setNodeLabels, setNode } = neo4jForm.actions

export default neo4jForm.reducer
