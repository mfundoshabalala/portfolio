module.exports = {
	// This will lint and format TypeScript and JavaScript files
	"**/*.(ts|tsx|js)": (/** @type {any[]} */ filenames) => [
		`npm run lint-fix ${filenames.join(" ")}`,
		`npm run format ${filenames.join(" ")}`,
	],

	// this will Format MarkDown and JSON
	"**/*.(md|json)": (/** @type {any[]} */ filenames) =>
		`npm run prettier --write ${filenames.join(" ")}`,
};
