const hre = require("hardhat");

async function main() {
  const NFT_TicketHIve = await hre.ethers.getContractFactory("NFT_TicketHIve");

  const nFT_TicketHIve = await NFT_TicketHIve.deploy();

  await nFT_TicketHIve.deployed();
  console.log(`NFT_TicketHIve contract address: ${nFT_TicketHIve.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });



  //Contrat address
  // 0x5FbDB2315678afecb367f032d93F642f64180aa3