import { Button, Container, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
export default function TabelaUsuarios(props) {

    const {listaUsuarios} = useSelector(state=>state.usuario);
    const dispatch = useDispatch();

    return (
        <Container>
            <Button type="button" onClick={() => {
                props.exibirFormulario(true);
            }}>Novo Usuario</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nickname</th>
                        <th>urlAvatar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaUsuarios.map((usuario) => {
                            return (<tr key={usuario.nickname}>
                                <td>{usuario.nickname}</td>
                                <td>{usuario.urlAvatar}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
}