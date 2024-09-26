
function connexionPage() {
  driver.$('//android.widget.FrameLayout[@content-desc="More"]')
  .then(moreButton => moreButton.click())
  .then(() => {
    return driver.$(btn_add_delete_cart);
  })
  .then(button => button.click())
  .then(() => {
    const emailFieldSelector = '//android.widget.EditText[@content-desc="Email. Required Field"]';
    return driver.$(emailFieldSelector);
  })
  .then(emailField => emailField.setValue("rpg2@yopmail.com"))
  .then(() => {
    const passwordFieldSelector = '//android.widget.EditText[@content-desc="Password. Required Field"]';
    return driver.$(passwordFieldSelector);
  })
  .then(passwordField => passwordField.setValue("Azerty1234567!"))
  .then(() => {
    const loginButtonSelector = '//android.widget.Button[@resource-id="fr.airweb.airwebtest.preprod:id/btn_login"]';
      return driver.$(loginButtonSelector);
    })
    .then(loginButton => loginButton.click())
    .catch(console.error);
}
connexionPage();