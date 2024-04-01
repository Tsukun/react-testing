/* eslint-disable no-undef */
const Page = require('./page');


class UsersPage extends Page {

    get loadingTitle () {
        return $('#users-loading');
    }

    get usersList () {
        return $('#users-list');
    }

    get usersItem () {
        return browser.react$$('User');
    }

    async loadData () {
        try{
            await this.open()
            await this.loadingTitle.waitForDisplayed()
            await this.usersItem.waitForDisplayed()
        } catch (e){
            throw new Error('Не удалось загрузить пользователей')
        }
    }

    async deletUser () {
        try{
            await this.open()
            await this.loadingTitle.waitForDisplayed({timeout: 2000})
            await this.usersItem.waitForDisplayed({timeout: 4000})
        } catch (e){
            throw new Error('Не удалось загрузить пользователей')
        }
    }
    

    open () {
        return super.open('/users-test');
    }
}

module.exports = new UsersPage();
