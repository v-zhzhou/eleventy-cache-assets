const saveLocal = require(".");

(async () => {
	saveLocal.concurrency = 2;
	let options = {
		duration: "1d"
	};

	let promises = [];

	// don’t await here to test concurrency
	promises.push(saveLocal("https://www.zachleat.com/img/avatar-2017-big.png", options));

	promises.push(saveLocal("https://twitter.com/eleven_ty/profile_image?size=bigger", options));
	promises.push(saveLocal("https://twitter.com/nejsconf/profile_image?size=bigger", options));
	promises.push(saveLocal("https://twitter.com/nebraskajs/profile_image?size=bigger", options));
	promises.push(saveLocal("https://twitter.com/netlify/profile_image?size=bigger", options));
	promises.push(saveLocal("https://twitter.com/zachleat/profile_image?size=bigger", options));

	promises.push(saveLocal("https://www.zachleat.com/web/css/fonts/lato/2.0/LatoLatin-Regular.ttf", options));

	let json = saveLocal("https://opencollective.com/11ty/members/all.json", {
		duration: options.duration,
		type: "json"
	});
	promises.push(json);

	await Promise.all(promises);

	console.log( JSON.stringify(await json).substr(0, 100), "… (truncated)" );
})();