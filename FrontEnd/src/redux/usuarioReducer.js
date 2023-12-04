import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "../recursos/estado";

const usuarioSlice = createSlice({
    name:'usuario',
    initialState:{
        status: ESTADO.OCIOSO,
        mensagem:'',
        listaUsuarios:[]
    },
    reducers:{
      
        adicionar:(state, action)=>{
            state.listaUsuarios.push(action.payload);
        },
    }
});

export const {adicionar} = usuarioSlice.actions; 
export default usuarioSlice.reducer;