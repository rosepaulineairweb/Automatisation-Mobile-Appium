const wdio = require("webdriverio");

async function openSpecificPage() {
  const opts = {
    path: '/wd/hub',
    port: 4724,
    capabilities: {
        platformName: "Android",
        "appium:deviceName": "Pixel 8 Pro Rose",
        "appium:appPackage": "fr.airweb.airwebtest.preprod",
        "appium:appActivity": "fr.airweb.grandlac.ui.splash.SplashActivity",
        "appium:automationName": "UiAutomator2",
        "appium:newCommandTimeout": 300,
        "appium:ensureWebviewsHavePages": true,
        "appium:nativeWebScreenshot": true,
        "appium:connectHardwareKeyboard": true,
      // Ajouter le deep linking
      autoLaunch: false // Empêche l'application de se lancer immédiatement
    }
  };

  const client = await wdio.remote(opts);

  try {
    // Démarrer l'application avec un deep link
    await client.startActivity({
      appPackage: "com.example",
      appActivity: "com.example.SpecificActivity",
      // Optionnel: Ajouter des données d'intent pour des scénarios plus spécifiques
    });

    // Votre code de test ici

  } catch (error) {
    console.error('Erreur lors de l\'ouverture de la page spécifique :', error);
  } finally {
    await client.deleteSession();
  }
}

openSpecificPage();