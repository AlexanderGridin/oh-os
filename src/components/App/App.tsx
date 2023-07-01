import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BG_IMAGE_URL, mockOSApps } from "../../mockData";
import { useConfigSelector } from "../../store/hooks";
import { setBackgroundImage } from "../../store/slices";
import { Dock } from "../Dock";

import styles from "./App.module.css";

export const App = () => {
  const dispatch = useDispatch();
  const backgroundImage = useConfigSelector("backgroundImage");

  const style = {
    backgroundImage: `url(${backgroundImage})`,
  };

  useEffect(() => {
    dispatch(setBackgroundImage(BG_IMAGE_URL));
  }, [dispatch]);

  return (
    <div className={styles.wrapper} style={style}>
      <Dock apps={mockOSApps} />
    </div>
  );
};
