import "./Jotai.css";
import { useAtomValue } from "jotai";
import { atomWithSuspenseQuery } from "jotai-tanstack-query";


const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// base: atomWithQuery
// atomWithSuspenseInfiniteQuery supports paginated requests (with methods to fetch the next page and check if fetching)
const todosAtom = atomWithSuspenseQuery(() => ({
  queryKey: ["todos"],
  queryFn: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    await delay(2500);
    return response.json();
  },
  staleTime: Infinity,
  cacheTime: Infinity, // can be cached
}));

export function Jotai4() {
  const todos = useAtomValue(todosAtom);

  if (todos.isFetched && !todos.data) {
    return <div>no todos</div>;
  }

  return (
    <div className="card" style={{ textAlign: "left" }}>
      <h1>Todos</h1>
      <ul>
        {todos.data.map((todo: any) => (
          <li key={todo.id}>{todo.id}: {todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
