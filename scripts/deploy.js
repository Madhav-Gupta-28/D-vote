const hre = require("hardhat");

async function main() {
  const DVote = await hre.ethers.getContractFactory("DVote");
  const dvote = await DVote.deploy();

  await dvote.deployed();

 console.log(`Contract is deployed on address ${dvote.address}`)
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
