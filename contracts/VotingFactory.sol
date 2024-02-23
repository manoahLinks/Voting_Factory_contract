// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "./Voting.sol";

contract VotingFactory {

    Voting poll;
    Voting[] polls;

    function createPolls (address _owner, address[] memory _options) external returns (Voting) {
        poll = new Voting(_owner, _options);
        
        polls.push(poll);
        return poll;
    }

    function getAllPoll () external view returns (Voting[] memory){
        return polls;
    }
}