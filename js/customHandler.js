class customHandler extends Paged.Handler {
	constructor(chunker, polisher, caller) {
		super(chunker, polisher, caller);
	}

	beforeParsed(content) {
		console.log("beforeParsed");
		// const links = content.querySelectorAll('a[href^="http"], a[href^="www"]');
		// links.forEach(link => {
		// 	console.log(link);
		// });
	}

	afterParsed(parsed) {
		console.log("afterParsed");
		// const images = parsed.querySelectorAll("img");
		// images.forEach(image => {
		// 	console.log(image);
		// });
	}


	afterPageLayout(pageFragment, page) {
		console.log("afterPageLayout");
	}
}

Paged.registerHandlers(customHandler);