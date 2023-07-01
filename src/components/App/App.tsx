import { mockOSApps } from "../../mockData";
import { Dock } from "../Dock";
import styles from "./App.module.css";

export const App = () => {
  const style = {
    backgroundImage: `url(https://images.pling.com/img/00/00/66/42/38/1904144/nord-lake.png)`,
  };

  return (
    <div className={styles.wrapper} style={style}>
      <Dock apps={mockOSApps} />
    </div>
  );
};
