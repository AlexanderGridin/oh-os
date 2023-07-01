import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useConfigSelector = (field: keyof RootState["config"]) => {
  return useSelector((state: RootState) => state.config[field]);
};
