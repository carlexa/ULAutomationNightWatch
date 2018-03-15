 module.exports = {
   '@tags': ['demo'],
    'Learning UI Automation' : function (client) {
      client
        .url('https://www.npmjs.com/')
        .waitForElementVisible('body', 2000)
        .setValue('#site-search', 'Babel')
        .click('#npm-search > button')
        .assert.containsText('.search-results div:first-child .packageName', 'Babel')
        .pause(2000)

        .end();
    }
  };