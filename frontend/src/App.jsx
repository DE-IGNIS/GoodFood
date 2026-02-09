import { useEffect, useState } from "react";

function App() {
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((data) => setInfo(data));
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
