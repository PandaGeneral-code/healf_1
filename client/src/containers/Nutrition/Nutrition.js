import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import { path as containerPath, screens } from "./_config";

import Fallback from "../../components/Fallback/Fallback";

const Nutrition = () => {
  const history = useHistory();

  const handleButtonClick = (path) => {
    history.push(`/${containerPath}/${path}`);
  };

  return (
    <>
      <div>Nutrition</div>
      <div>
        {screens.map(({ screenName, screenPath }) => (
          <button
            key={screenPath}
            onClick={() => handleButtonClick(screenPath)}
          >
            {screenName}
          </button>
        ))}
      </div>
      <Switch>
        {screens.map(({ screenPath }) => (
          <Route key={screenPath} path={`/${containerPath}/${screenPath}`} />
        ))}
        <Route component={Fallback} path="/:container?/:screen?" />
      </Switch>
    </>
  );
};

export default Nutrition;
