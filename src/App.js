import "./App.css";
import { useEffect, useState } from "react";

function PaginatedData() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://api.example.com/data?page=${page}`)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data.items);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
        console.log(err);
      });
  }, [page]);

  return (
    <div>
      <h2>Page: {page}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
      <button onClick={() => setPage(page + 1)}>Next Page</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <PaginatedData />
    </div>
  );
}

export default App;
