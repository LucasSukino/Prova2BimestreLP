import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadUsuario from "./formularios/FormCadUsuario";
import TabelaUsuarios from "./tabelas/TabelaUsuarios";
import { useState } from "react";

export default function TelaCadastroUsuario(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    
    return (
        <Container>
            <Pagina>
                {
                    exibirFormulario ? <FormCadUsuario exibirFormulario={setExibirFormulario} 
                                                       /> 
                                     : 
                                      <TabelaUsuarios exibirFormulario={setExibirFormulario}
                                                      />
                }
            </Pagina>
        </Container>
    )
}