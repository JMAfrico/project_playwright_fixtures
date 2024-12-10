import {test} from '../tests/base';

test("Login com sucesso", async ({loginPage,page}) => {
  await page.goto('https://pdfkit.org/docs/getting_started.html')
  await loginPage.abrir();
  await loginPage.setEmail();
  await loginPage.setSenha()
  await loginPage.clickBtnLogin()
});