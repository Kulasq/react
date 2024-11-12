import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  return(
    <>
    <Perfil nome="Lucas" endereco="https://github.com/Kulasq.png"/>
    <ReposList />


    {/* {formularioEstaVisivel && (
      <Formulario/>
  )}

    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Formulario</button> */}
    </>
  )
}

export default App
