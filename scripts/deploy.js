const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding");
  const crowdFunding = await CrowdFunding.deploy();
  await crowdFunding.deployed();

  console.log(`CrowdFunding deployed to ${crowdFunding.address}`);

  fs.writeFileSync(
    "./config.js",
    `
  export const contractAddress = "${crowdFunding.address}"
  export const ownerAddress = "${crowdFunding.signer.address}"
  `
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
