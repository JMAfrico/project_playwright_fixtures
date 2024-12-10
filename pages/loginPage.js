import { expect } from '@playwright/test';

export class LoginPage {

    constructor(page) {
        this.page = page
    }

    async abrir() {
        await this.page.goto('https://admin-demo.nopcommerce.com/login')
    }

    async setEmail() {
        await this.page.locator('input[name="Email"]').fill('admin@yourstore.com');
    }

    async setSenha() {
        await this.page.locator('input[name="Password"]').fill('admin');
    }

    async clickBtnLogin() {
        await this.page.locator("//button[text()='Log in']").click();
    }

    async validandoAcesso() {
        await expect(this.page.getByRole('link', { name: 'Logout' })).toBeVisible();
    }
}



