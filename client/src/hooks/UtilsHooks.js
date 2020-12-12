import { useSelector } from "react-redux";

export const useUtilsHooks = () => {
  const state = useSelector(({ utils }) => utils);

  return { state };
};
