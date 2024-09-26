// Importation du module 'remote' de 'webdriverio'.
import { remote } from "webdriverio";


  const caps = {
    platformName: "Android",
    "appium:deviceName": "Pixel 8 Pro Rose",
    "appium:appPackage": "fr.airweb.airwebtest.preprod",
    "appium:appActivity": "fr.airweb.grandlac.ui.splash.SplashActivity",
    "appium:automationName": "UiAutomator2",
    "appium:newCommandTimeout": 300,
    "appium:ensureWebviewsHavePages": true,
    "appium:nativeWebScreenshot": true,
    "appium:connectHardwareKeyboard": true,
  };

  const driver = await remote({
    protocol: "http",
    hostname: "127.0.0.1",
    port: 4723,
    path: "/",
    capabilities: caps,
  });
  async function main() {
  // Sélecteurs
  const el1 = await driver.$("id:com.android.permissioncontroller:id/permission_allow_foreground_only_button");
  await el1.click();
  const el2 = await driver.$("class name:android.view.ViewGroup");
  await el2.click();
  const el4Selector = "id:fr.airweb.airwebtest.preprod:id/iv_close";
await driver.waitUntil(
  async () => {
    const el4 = await driver.$(el4Selector);
    return el4.isDisplayed();
  },
  {
    timeout: 10000,
    timeoutMsg: `L'élément ${el4Selector} n'était pas visible après 5 secondes`
  }
);
const el4 = await driver.$(el4Selector);
await el4.click();

await connexionPage();
}

main().catch(console.error);

async function connexionPage() {
  try {
    await driver.$('//android.widget.FrameLayout[@content-desc="More"]').then(moreButton => moreButton.click());
    const btn_add_delete_cart = '//android.widget.Button[@content-desc="Add or delete a product from the cart"]';
    await driver.$(btn_add_delete_cart).then(button => button.click());
    const emailFieldSelector = '//android.widget.EditText[@content-desc="Email. Required Field"]';
    await driver.$(emailFieldSelector).then(emailField => emailField.setValue("rpg2@yopmail.com"));
    const passwordFieldSelector = '//android.widget.EditText[@content-desc="Password. Required Field"]';
    await driver.$(passwordFieldSelector).then(passwordField => passwordField.setValue("Azerty1234567!"));
    const loginButtonSelector = '//android.widget.Button[@resource-id="fr.airweb.airwebtest.preprod:id/btn_login"]';
    await driver.$(loginButtonSelector).then(loginButton => loginButton.click());
  } catch (error) {
    console.error(error);
  }
}

// Appel de la fonction connexionPage
await connexionPage();