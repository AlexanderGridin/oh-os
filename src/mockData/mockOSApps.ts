import { OSApp } from "../models";

const generateMockOSApps = (amount: number): OSApp[] => {
	const apps: OSApp[] = [];

	if (!amount) {
		return apps;
	}

	for (let i = 0; i < amount; i++) {
		apps.push({ ...new OSApp({ name: `App ${i}` }) });
	}

	return apps;
};

export const mockOSApps = generateMockOSApps(5);
