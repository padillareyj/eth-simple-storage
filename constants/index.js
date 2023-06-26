export const MY_CONTRACT_ADDRESS = "0x3C67Bc50583B74C4539C796D5e9a274067d89d2c";
export const abi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "initialSentence",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "getSentence",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "newSentence",
          "type": "string"
        }
      ],
      "name": "setSentence",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];