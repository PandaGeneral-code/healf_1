import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { useUtilsHooks } from "../../hooks/UtilsHooks";

const Fallback = () => {
  const history = useHistory();
  const params = useParams();
  const {
    state: { containers, screens },
  } = useUtilsHooks();

  useEffect(() => {
    if (
      !params.container ||
      !containers.map(({ path }) => path).includes(params.container)
    ) {
      console.log("pushed to home");
      history.push("/home");
    } else {
      console.log(
        "valid container, now need to make sure that the are on the correct screen"
      );
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
