var VaultStability = artifacts.require("./Vault.sol");
var VaultProjects = artifacts.require("./Vault.sol");

module.exports = function(deployer) {
    deployer.deploy(VaultStability); //stability
    deployer.deploy(VaultProjects); //projects
};
