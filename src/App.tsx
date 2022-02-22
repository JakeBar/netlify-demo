import { useEffect, useState } from "react";
import { NetlifyAPI } from "./api";
import "./style.scss";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    NetlifyAPI.fetchMessage().then(({ message }) => {
      setData(message);
    });
  }, []);

  return (
    <article className="container">
      <h2>Programming Guild</h2>
      {data && <div>{data}</div>}
    </article>
  );
};

export { App };
