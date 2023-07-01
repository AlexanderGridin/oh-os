import { OSApp } from "../../models";
import { Tooltip } from "../shared/Tooltip";
import styles from "./OSAppThumbnail.module.css";

interface OSAppThumbnailProps {
  app: OSApp;
}

export const OSAppThumbnail = ({ app }: OSAppThumbnailProps) => {
  const handleClick = () => {
    console.log(app.name);
  };

  return (
    <Tooltip title={app.name} arrow placement="top" backgroundColor="#5e81ac">
      <div className={styles.wrapper} onClick={handleClick}>
        <div className={styles.image}>
          {app.imgUrl && <img src={app.imgUrl} alt={app.name} width="50" height="50" style={{ objectFit: "cover" }} />}
        </div>
      </div>
    </Tooltip>
  );
};
