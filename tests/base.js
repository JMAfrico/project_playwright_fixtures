//Importo as pages que quero usar
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginPage'

// adiciono a variavel test (essa é a test que chamo na classe spec.js) que vem da base.test( estou sobreescrevendo a original) 
// passo no parametro a loginPage, quando eu chamo ela já instancia uma nova LoginPage
const test = base.test.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});
module.exports={test}