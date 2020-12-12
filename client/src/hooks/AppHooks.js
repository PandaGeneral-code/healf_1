import { useCallback } from "react";

export const useAppHooks = () => {
  return { loadData: useCallback(() => {}, []) };
};
