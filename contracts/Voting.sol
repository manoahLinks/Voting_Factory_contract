// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Voting {

    address owner;
    address[] options;

    constructor (address _owner, address[] memory _options) {
        
        owner = _owner;
        options = _options;

        for(uint i = 0; i < _options.length; i++){
            isValidCandidate[options[i]] = true;
        }
    }

    mapping(address => bool) hasVoted;
    mapping (address => uint) candidateVotes;
    mapping (address => bool) isValidCandidate;


    function vote (address _candidateAddr) external {

        require(!hasVoted[msg.sender], "You have voted already");

        require(isValidCandidate[_candidateAddr], "selected candidate does not exists");

        hasVoted[msg.sender] = true;

        candidateVotes[_candidateAddr] = candidateVotes[_candidateAddr] + 1;

    }

    function getCandidatesVotes (address _candidate) external view {
        candidateVotes[_candidate];
    }
}