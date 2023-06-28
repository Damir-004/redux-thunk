import React, { useEffect } from "react";
import "./App.css";
import { findings } from "./store/findings";
import { useAppDispatch, useAppSelector } from "./store/store";

const App = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state: any) => state.users);

  const [inputValue, setInputValue] = React.useState<string>("");
  const [active, setActive] = React.useState<boolean>(false);

  useEffect(() => {
    if (active === true && inputValue.trim().length > 0) {
      dispatch(findings(inputValue));
      setActive(false);
    }
  }, [active]);
  return (
    <div className="main">
      <div className="box">
        <h3>Github username: </h3>
        <input
          id="input"
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Github username..."
        />
        <button onClick={() => setActive(!active)}>get</button>
      </div>
      <ul>
        {state.isLoading ? (
          <div>Loading...</div>
        ) : state.isError ? (
          state.isError
        ) : (
          state.users.map((item: any) => 
          <li>
            <a target={item.html_url} href={item.html_url}>
              {item.name}
            </a>
          </li>
          )
        )}
      </ul>
    </div>
  );
};

export default App;
