# Ternoa Test 1 : 

Ce projet est un exemple d'utilisation du SDK Ternoa-JS pour interagir avec la blockchain Ternoa.
Vous pourrez:
- Vérifier le solde CAPS sur un wallet Ternoa.
- Envoyer des CAPS
- Créer un NFT

## Prérequis

- Node.js (v14 ou supérieur)
- npm (v6 ou supérieur)

## Installation

Clonez ce dépôt et installez les dépendances :

```bash
git clone https://github.com/AnthoGLG/Ternoa-Test-1
cd mon-projet-ternoa
npm install
````

## Utilisation
### Vérifier le solde CAPS
Pour vérifier le solde CAPS, modifiez index.js pour inclure votre adresse publique Ternoa et exécutez le script :

```javascript
const { initializeApi, balanceToNumber, getTotalBalance } = require("ternoa-js");

const ADDRESS = "votre_adresse_publique";

const main = async () => {
  try {
    await initializeApi(); // Initialiser l'API
    const totalBalance = await getTotalBalance(ADDRESS);
    console.log(`Total balance: ${balanceToNumber(totalBalance)}`);
  } catch (error) {
    console.error("Error fetching balance:", error);
  }
};

main();
```
#### Exécutez le script :

```bash
node index.js
```

### Envoyer des CAPS
#### Précautions
Ne pas Partager : Ne jamais partager votre phrase mnémonique avec quelqu'un d'autre.

Sécurité : Conservez la phrase dans un endroit sûr et faites des copies de sauvegarde.

Pour envoyer des CAPS, modifiez index.js pour inclure votre adresse publique, l'adresse du destinataire et la phrase mnémonique. Ensuite, exécutez le script :

```javascript
const { initializeApi, transferCaps } = require("ternoa-js");

const SENDER_ADDRESS = "votre_adresse_publique";
const RECEIVER_ADDRESS = "adresse_du_destinataire";
const AMOUNT = 10; // Montant en CAPS
const SENDER_MNEMONIC = "votre_mnemonic_phrase";

const main = async () => {
  try {
    await initializeApi(); // Initialiser l'API
    const result = await transferCaps(SENDER_ADDRESS, RECEIVER_ADDRESS, AMOUNT, SENDER_MNEMONIC);
    console.log(`Successfully transferred ${AMOUNT} CAPS to ${RECEIVER_ADDRESS}`);
    console.log(result);
  } catch (error) {
    console.error("Error transferring CAPS:", error);
  }
};

main();
```
#### Exécutez le script :

```bash
node index.js
```






