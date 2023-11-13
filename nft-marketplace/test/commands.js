const instance = await NftMarket.deployed();

instance.mintToken("https://cyan-adorable-ermine-23.mypinata.cloud/ipfs/QmQW9s1PAq4qZyuaqcz3PQUf3FZLArj7M24s9xKyhLLA7J?_gl=1*1m1ak77*_ga*NzcyMTEwNTMyLjE2OTc0NTQ3MjA.*_ga_5RMPXG14TE*MTY5OTg3Njc5NS40LjEuMTY5OTg3NzA4Ni42MC4wLjA.", { value: "25000000000000000", from: accounts[0] });

instance.mintToken("https://cyan-adorable-ermine-23.mypinata.cloud/ipfs/Qma1SqnBt4zLvyARVaA59br4T6zwtRDujhJiSC4nzChPSx?_gl=1*fwf07p*_ga*NzcyMTEwNTMyLjE2OTc0NTQ3MjA.*_ga_5RMPXG14TE*MTY5OTg3Njc5NS40LjEuMTY5OTg3ODUyNi42MC4wLjA.", "300000000000000000", { value: "25000000000000000", from: accounts[0] });
