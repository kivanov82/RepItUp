import 'zeppelin-solidity/contracts/ownership/Ownable.sol';
import "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract Vault is Ownable {

    event SetAllowance(address indexed token, address indexed spender, uint256 amount);
    event TokenTransfer(address indexed token, address indexed receiver, uint256 amount);

    function requestAllowance(ERC20 _token, uint256 _amount) onlyOwner public {
        address spender = msg.sender;

        // Some token implementations will throw when changing an allowance from non-zero to non-zero
        // https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
        if (_token.allowance(address(this), spender) > 0)
            assert(_token.approve(spender, 0));

        if (_amount > 0)
            assert(_token.approve(spender, _amount));

        SetAllowance(_token, spender, _amount);
    }

    function transferTokens(ERC20 _token, address _receiver, uint256 _amount) onlyOwner public {
        assert(_token.transfer(_receiver, _amount));
        TokenTransfer(_token, _receiver, _amount);
    }

}