function ListaTarefas({ tarefas, aoExcluir }) {
  return (
    <ul>
      {tarefas.map((tarefa) => (
        <li key={tarefa.id}>
          {tarefa.titulo}
          <button onClick={() => aoExcluir(tarefa.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
}

export default ListaTarefas;
