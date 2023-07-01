import { OSApp } from "../../models";
import { OSAppThumbnail } from "../OSAppThumbnail";
import styles from "./Dock.module.css";

interface DockProps {
	apps?: OSApp[];
}

export const Dock = ({ apps = [] }: DockProps) => {
	const isIntelliHide = false;
	return (
		<div className={styles.wrapper}>
			<div className={`${styles.container} `}>
				<div
					className={`${styles.content} ${
						isIntelliHide ? styles.intelliHide : ""
					}`}
				>
					{apps.map((app: OSApp) => (
						<OSAppThumbnail key={app.name} app={app} />
					))}
				</div>
			</div>
		</div>
	);
};
