function ListaTarefas({ tarefas, aoExcluir, aoEditar, aoAlternarConclusao }) {
  return (
    <ul>
      {tarefas.map((tarefa) => (
        <li key={tarefa.id} className={tarefa.concluida ? "concluida" : ""}>
          <input
            type="checkbox"
            checked={tarefa.concluida}
            onChange={() => aoAlternarConclusao(tarefa.id)}
          />
          <span>{tarefa.titulo}</span>
          <div>
            <button onClick={() => aoEditar(tarefa)}>Editar</button>
            <button onClick={() => aoExcluir(tarefa.id)}>Excluir</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListaTarefas;
