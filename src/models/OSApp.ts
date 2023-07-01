export class OSApp {
	public imgUrl = "";
	public name = "";

	constructor({ imgUrl, name }: Partial<{ imgUrl: string; name: string }>) {
		this.imgUrl =
			imgUrl ??
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-tools.svg/1024px-Circle-icons-tools.svg.png";
		this.name = name ?? "Default OS App name";
	}
}
