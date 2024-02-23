import {
    time,
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";
  import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
  import { expect } from "chai";
  import { ethers } from "hardhat";

  describe("Voting Factory", () => {

    const deplyVotingFactory = async () => {
        
        const [owner, acct1, acct2, acct3, acct4] = await ethers.getSigners();

        const VotingFactory = await ethers.getContractFactory("VotingFactory");
        const votingFactory = await VotingFactory.deploy()

        return {votingFactory, owner, acct1, acct2, acct3, acct4}
    }

    describe("deployment", () => {
        it("length of pools of factory con", async () => {
            const {votingFactory} = await loadFixture(deplyVotingFactory);

            expect((await votingFactory.getAllPoll()).length).to.be.equal(0) 

        })
    })

    describe("createPoll", () => {
        it("should deploy a new poll from factory", async () => {
            const {votingFactory, owner, acct1, acct2, acct3, acct4} = await loadFixture(deplyVotingFactory);

            (await votingFactory.createPolls(owner, [acct1, acct2, acct3, acct4])).wait()

            const allPollsLength = (await votingFactory.getAllPoll()).length

            expect(allPollsLength).to.be.equal(1)

        })
    })
  })