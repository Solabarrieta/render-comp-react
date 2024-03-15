import "./TodoList.css";

function TodoList(props) {
  const renderTodos = props.children || props.render

  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
      {props.searchedTodos.map(props.render)}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchedResults(props.searchText)}

      <ul className="TodoList">{renderTodos}</ul>
    </section>
  );
}

export { TodoList };
