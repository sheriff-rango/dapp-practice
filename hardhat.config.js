require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// const API_URL = "https://ropsten.infura.io/v3/9eb88a29bebb4839b85bf68301338542";
const API_URL = "https://eth-ropsten.alchemyapi.io/v2/u7GiPkiQVHo_PsSU5rlTz17IjNCAL_w2";
const PRIVATE_KEY = "aae5bcb0beedac7301139b2af62ad1a9a9b4ed4c9d8520906769b23fb35e355f";

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
};
