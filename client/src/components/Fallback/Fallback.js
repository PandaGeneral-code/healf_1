import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { useUtilsHooks } from "../../hooks/UtilsHooks";

const Fallback = () => {
  const history = useHistory();
  const params = useParams();
  const {
    state: { containers },
  } = useUtilsHooks();

  useEffect(() => {
    if (
      !params.container ||
      !containers.map(({ path }) => path).includes(params.container)
    ) {
      history.push("/home");
    }
  }, [containers, history, params.container]);

  return (
    <>
      <div>Fallback</div>
      <pre>{JSON.stringify({ containers, params }, null, 2)}</pre>
    </>
  );
};

export default Fallback;
