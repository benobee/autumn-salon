class Template {
	constructor(props) {
		for (const key of Object.keys(props)) {
			switch (key) {
				case "component" :
					this.html = props['component'];
					break;
				case "data" : 
					this.data = props['data'];
					break;
				default:
					break;
			}
		}
	}
	render(data) {
		for (const key of Object.keys(data)) {
			switch (key) {
				case "className" :
					this.className = data.className;
					break;
				case "content" : 
					this.content = data.content;
					break;
				default:
					break;
			}
		}

		const string = this.replace(this.html);
	}
	replace(str) {
		const matches = str.match(/\{(.*?)\}/g);

		const data = matches.map((item) => {
			const content = item.replace(/\{/g, '').replace(/\}/g, '').split('.');

			const name = this[content[1]];

			this.html = this.html.replace(item, name);
		});
	}
}

export default Template;
