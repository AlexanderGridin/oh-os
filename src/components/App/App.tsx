import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { BG_IMAGE_URL, mockOSApps } from "../../mockData";
import { useConfigSelector } from "../../store/hooks";
import { patchSettings } from "../../store/slices";
import { Dock } from "../Dock";
import { SimpleSettingsForm } from "../SimpleSettingsForm";

import styles from "./App.module.css";

export const App = () => {
  const dispatch = useDispatch();
  const backgroundImage = useConfigSelector("backgroundImage");

  const style = {
    backgroundImage: `url(${backgroundImage})`,
  };

  useEffect(() => {
    dispatch(
      patchSettings({
        backgroundImage: BG_IMAGE_URL,
      })
    );
  }, [dispatch]);

  return (
    <div className={styles.wrapper} style={style}>
      <SimpleSettingsForm />
      <Dock apps={mockOSApps} />
    </div>
  );
};
