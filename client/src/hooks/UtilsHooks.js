import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const useUtilsHooks = () => {
  const location = useLocation();
  const state = useSelector(({ utils }) => utils);
  const [selectedContainer, setSelectedContainer] = useState(null);
  const [selectedScreen, setSelectedScreen] = useState(null);

  useEffect(() => {
    setSelectedContainer(() => location.pathname.split("/")[1]);
    setSelectedScreen(() => location.pathname.split("/")[2]);
  }, [location.pathname]);

  return {
    location: { container: selectedContainer, screen: selectedScreen },
    state,
  };
};
