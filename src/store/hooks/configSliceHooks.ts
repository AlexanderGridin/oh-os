import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useConfigSelector = <T>(field: keyof RootState["config"]) => {
  return useSelector((state: RootState) => {
    return state.config[field] as T;
  });
};
