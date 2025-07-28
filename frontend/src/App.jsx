import { useState } from "react";
import FormularioTarefa from "./componentes/FormularioTarefa";
import ListaTarefas from "./componentes/ListaTarefas";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [tarefaParaEditar, setTarefaParaEditar] = useState(null);

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
    if (tarefaParaEditar?.id === id) {
      setTarefaParaEditar(null);
    }
  };

  const editarTarefa = (id, novoTitulo) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, titulo: novoTitulo } : tarefa
      )
    );
    setTarefaParaEditar(null);
  };

  const alternarConclusao = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  const limparEdicao = () => {
    setTarefaParaEditar(null);
  };

  return (
    <div className="container">
      <h1>Gerenciador de Tarefas</h1>

      <FormularioTarefa
        aoAdicionar={adicionarTarefa}
        tarefaParaEditar={tarefaParaEditar}
        aoEditar={editarTarefa}
        limparEdicao={limparEdicao}
      />

      <ListaTarefas
        tarefas={tarefas}
        aoExcluir={excluirTarefa}
        aoEditar={setTarefaParaEditar}
        aoAlternarConclusao={alternarConclusao}
      />
    </div>
  );
}

export default App;
