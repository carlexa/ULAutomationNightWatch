module.exports = {
    '@tags': ['demo2'],
     'Learning UI Automation 2' : function(browser) {
        var search = browser.page.search();

        search.navigate()
          .searchFor('Babel')
          .confirmFirstResult('Babel')
        browser.pause(2000)
          .end();

     }
   };