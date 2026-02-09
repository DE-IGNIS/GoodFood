import { useEffect, useState } from "react";

function App() {
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api`)
      .then((res) => setInfo(res.data))
      .catch((err) => console.error(err));
    setLoading(false);
  }, []);

  return (
    <div>
      <p>Hello my name is prince</p>
      {loading && <p>Loading...</p>}

      {!loading && info && (
        <>
          <p>{info.id}</p>
          <p>{info.title}</p>
          <p>{info.body}</p>
        </>
      )}
    </div>
  );
}
export default App;
