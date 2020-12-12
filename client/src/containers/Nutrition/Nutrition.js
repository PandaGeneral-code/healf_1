import React from "react";

import { screens, screens_ALT } from "./_config";

const Nutrition = () => {
  return (
    <>
      <div>Nutrition</div>
      <ol>
        {screens.map((screenName) => (
          <li key={screenName}>{screenName}</li>
        ))}
      </ol>
      <ol>
        {screens_ALT.map((screenPath) => (
          <li key={screenPath}>{screenPath}</li>
        ))}
      </ol>
    </>
  );
};

export default Nutrition;
