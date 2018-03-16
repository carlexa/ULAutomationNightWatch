const commands = require('../commands/search');

module.exports = {
    commands: [commands],
    url:'https://www.npmjs.com/',

	elements: {
		searchInput: '#site-search',
		searchButton: '#npm-search > button',
		firstResult: '.search-results div:first-child .packageName'
	}
};