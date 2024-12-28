async function main() {
  const [deployer] = await ethers.getSigners(); // Get the first signer (deployer account)
  
  console.log("Deploying contracts with the account:", deployer.address);

  const balance = await deployer.getBalance();
  console.log("Account balance:", ethers.utils.formatEther(balance), "ETH");

  // Get the contract factory
  const Voting = await ethers.getContractFactory("Voting");

  // Deploy the contract with constructor arguments
  const Voting_ = await Voting.deploy(["Mark", "Mike", "Henry", "Rock"], 90);
  
  console.log("Waiting for deployment...");
  await Voting_.deployed();

  console.log("Contract deployed at address:", Voting_.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error("Error in deployment:", error);
    process.exit(1);
  });
