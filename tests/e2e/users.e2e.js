const UsersPage = require('../pages/users.page')

describe('My user world page', () => {
    it('load data', async () => {
      await UsersPage.loadData()
    })

})

