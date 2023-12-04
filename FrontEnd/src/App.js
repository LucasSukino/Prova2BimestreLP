import Tela404 from "./telasCadastro/Tela404";
import TelaMenu from "./telasCadastro/TelaMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import TelaCadastroUsuario from "./telasCadastro/TelaCadastroUsuario";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {
              //Os caminhos (path) devem ser organizados do mais específico para o mais geral
            }
            <Route path="/usuarios" element={<TelaCadastroUsuario />} />
            <Route path="/" element={<TelaMenu />} />
            {
              //... demais telas de cadastro
            }
            <Route path="*" element={<Tela404 />} />
          </Routes>
        </BrowserRouter>
      </Provider>
      <ToastContainer/>
    </div>
  );
}

export default App;
