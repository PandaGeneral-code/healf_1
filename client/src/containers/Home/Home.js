import React from "react";
import { useHistory } from "react-router-dom";

import { useUtilsHooks } from "../../hooks/UtilsHooks";
import Wrapper from "./styled";

const Home = () => {
  const history = useHistory();
  const {
    state: { containers },
  } = useUtilsHooks();

  return (
    <Wrapper>
      <div>Home</div>
      {containers.map(({ config: { path, title } }) => (
        <button key={path} onClick={() => history.push(path)}>
          {title}
        </button>
      ))}
    </Wrapper>
  );
};

export default Home;
