import { useEffect, useState } from "react";
import { NetlifyAPI } from "./api";
import "./style.scss";

const App = () => {
  const [message, setMessage] = useState(null);

  // useEffect(() => {
  //   NetlifyAPI.fetchMessage().then(({ data }) => {
  //     setMessage(data);
  //   });
  // }, []);

  return (
    <div className="container">
      <h2>Programming Guild</h2>
      {message && <div>message</div>}
    </div>
  );
};

export { App };
