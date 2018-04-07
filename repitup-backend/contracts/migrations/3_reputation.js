var Reputation = artifacts.require("./Reputation.sol");

module.exports = function(deployer) {
    deployer.deploy(Reputation, ['Buss1', 'Buss2']);
};
