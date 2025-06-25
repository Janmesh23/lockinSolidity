const hre = require("hardhat");

async function main() {
  const HelloWorld = await hre.ethers.getContractFactory("hello_world");
  const hello = await HelloWorld.deploy();

  // Wait for deployment (Ethers v6 style)
  await hello.waitForDeployment();

  console.log("Contract deployed to:", await hello.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


/*
soo here what issues were faced ??
you were using the latest Hardhat with Ethers v6, and that error means you're using an old ethers v5 pattern (deployed()), which no longer works in v6.

old version of ethers used `deployed()` to wait for the contract to be deployed, but in ethers v6, you should use `waitForDeployment()` instead.
So, the solution is to replace `await hello.deployed();` with `await hello.waitForDeployment();`

hence see this deploy.js file, which is now using the correct Ethers v6 pattern to deploy the contract.

const { ethers } = require("hardhat");

async function main() {
  const HelloWorld = await ethers.getContractFactory("hello_world");
  const hello = await HelloWorld.deploy();
  await hello.deployed();
  console.log("Contract deployed to:", hello.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


*/