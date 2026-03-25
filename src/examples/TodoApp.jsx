import { useCallback } from "react";
import { useQuery } from "../hooks/useQuery";
import { fetcher } from "../utils/fetcher";

export default function TodoApp() {
  const fetchTodos = useCallback(() => {
    return fetcher("https://jsonplaceholder.typicode.com/todos");
  }, []);

  const { data, loading, error } = useQuery("todos", fetchTodos);

  // ✅ Loading state
  if (loading) return <p>Loading...</p>;

  // ✅ Error state
  if (error) return <p>Something went wrong...</p>;

  // ✅ Safety check (prevents crash)
  if (!data || data.length === 0) {
    return <p>No todos available</p>;
  }

  return (
    <div>
      <h2>Todos</h2>
      {data.slice(0, 10).map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
}