var SimpleToken = artifacts.require("./SimpleToken.sol");
var VotingToken = artifacts.require("./SimpleToken.sol");

module.exports = function(deployer) {
    deployer.deploy(SimpleToken);

    deployer.deploy(VotingToken);
    VotingToken.deployed().then(function(instance) {
        instance.transfer.call(accounts[1], 587);
        return instance.transfer.call(accounts[2], 4);
    })
};
