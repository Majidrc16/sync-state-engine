# 🚀 Sync State Engine

> Lightweight API caching & state management for React

A minimal, educational implementation of a smart client-side data layer that handles caching, synchronization, and efficient state updates — inspired by modern tools like React Query and Zustand.

---

## ✨ Features

* ⚡ Smart API caching
* 🔁 Prevents duplicate API calls
* 🚀 Optimistic UI updates
* 🧠 Simple and intuitive API
* 📦 Lightweight and minimal
* ♻️ Efficient re-rendering

---

## 📦 Installation

```bash
git clone https://github.com/YOUR_USERNAME/sync-state-engine.git
cd sync-state-engine
npm install
npm run dev
```

---

## 🚀 Usage

```js
import { useQuery } from "./hooks/useQuery";

const { data, loading, error } = useQuery("todos", fetchTodos);
```

---

## 🧪 Example

```js
const fetchTodos = () =>
  fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
    res.json()
  );

function App() {
  const { data, loading } = useQuery("todos", fetchTodos);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {data.slice(0, 10).map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
}
```

---

## 🧠 How It Works

* Uses a global store to manage application state
* Caches API responses with timestamps
* Avoids redundant network requests
* Syncs UI with minimal updates using subscriptions

---

## 🔍 Comparison

| Feature            | Sync State Engine | React Query |
| ------------------ | ----------------- | ----------- |
| Caching            | ✅                 | ✅           |
| Deduplication      | ✅                 | ✅           |
| Optimistic Updates | ✅                 | ✅           |
| DevTools           | ❌                 | ✅           |
| Advanced Features  | ❌                 | ✅           |

---

## 📁 Project Structure

```
src/
  core/        # store, cache logic
  hooks/       # useQuery, useMutation
  utils/       # helper functions
  examples/    # demo applications
```

---

## 📚 Concepts Covered

* State management
* Cache invalidation
* Observer/Subscriber pattern
* Async data handling
* Optimistic updates

---

## 🛠 Tech Stack

* React
* JavaScript (ES6+)
* Vite

---

## 📌 Future Improvements

* ⏱ Cache invalidation strategies
* 🔄 Background refetching
* 📄 Pagination support
* 🧪 Unit testing
* 📊 Devtools integration
* 🧩 Middleware support

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

MIT License

---

## ⭐ Support

If you like this project, consider giving it a star ⭐ on GitHub!
