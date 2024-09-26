
async function seePassword(client) {
    try {
        // Trouver et cliquer sur le bouton pour afficher le mot de passe
        const btnPassword = await client.$('//android.widget.Button[@resource-id="fr.airweb.airwebtest.preprod:id/btn_password"]');
        await btnPassword.click();
  
        // Vérifier que le mot de passe est affiché
        console.log('Le test pour afficher le mot de passe a réussi.');
      } catch (error) {
        console.error('Le test a échoué :', error);
      } finally {
        await client.deleteSession();
      }
  }
 
