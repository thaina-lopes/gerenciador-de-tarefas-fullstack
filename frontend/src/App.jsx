import { useState } from "react";
import FormularioTarefa from "./componentes/FormularioTarefa";
import ListaTarefas from "./componentes/ListaTarefas";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (titulo) => {
    const novaTarefa = {
      id: crypto.randomUUID(),
      titulo,
      concluida: false,
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  const excluirTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  return (
    <div className="container">
      <h1>Gerenciador de Tarefas</h1>

      <FormularioTarefa aoAdicionar={adicionarTarefa} />
      <ListaTarefas tarefas={tarefas} aoExcluir={excluirTarefa} />
    </div>
  );
}

export default App;
