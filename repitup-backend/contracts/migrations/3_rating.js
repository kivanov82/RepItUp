var Rating = artifacts.require("./Rating.sol");

module.exports = function(deployer) {
    deployer.deploy(Rating, ['Bus1', 'Bus2']);
};
