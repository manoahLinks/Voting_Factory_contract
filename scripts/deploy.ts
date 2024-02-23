import { ethers } from "hardhat";

async function main() {
 
  const votingFactory = await ethers.deployContract("VotingFactory");

  await votingFactory.waitForDeployment();

  console.log(
    `votingFactory successfully deployed on ${votingFactory.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
