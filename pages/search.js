var commands = {
    searchFor: function(searchTxt){
            return this.waitForElementVisible('body', 1000)
                .setValue('@searchInput', searchTxt)
				.click('@searchButton')
	},
	confirmFirstResult: function(firstResult){
		return this.waitForElementVisible('body', 1000)
			.assert.containsText('@firstResult', firstResult)
	}
};

module.exports = commands;
