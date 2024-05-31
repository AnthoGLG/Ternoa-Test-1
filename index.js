const { initializeApi,balanceToNumber, getTotalBalance } = require("ternoa-js");

const ADDRESS = "5DwEctkmhJFJZF3m68hg7KxcMGr5thWieeJjk1W4NZpDJ8sv";

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