var SimpleToken = artifacts.require("./SimpleToken.sol");
var VotingToken = artifacts.require("./SimpleToken.sol");
var municipality = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57";
var civilian = "0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef";

module.exports = function(deployer) {
    SimpleToken.new().then(function(instance) {
        console.log('Rewards Token:' + instance.address);
    });

    VotingToken.new().then(function(instance) {
        console.log('Voting Token:' + instance.address);
        instance.transfer(municipality, 587);
        return instance.transfer(civilian, 4);
    }).catch(function(err) {
        // There was an error! Handle it.
    });

};
