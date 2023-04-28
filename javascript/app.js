function connectToMetMask() {
    ethereum.enable().then(result => {
        console.log("Account: ",result);
        document.getElementById("Connected").innerHTML=result;
    })
}


$(document).ready(function () {

    web3 = new Web3(ethereum);
    console.log("Connection Object: ",web3)
   // 0x00C1d5c2000f3121b7aCFDF92b27397e1932Ad80                    sepoliya

   // 0x5FbDB2315678afecb367f032d93F642f64180aa3
    const contractAddress = "0x00C1d5c2000f3121b7aCFDF92b27397e1932Ad80";
    // const contractAbi = [
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "_PersonID",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "_Name",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "_Experience",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "_Orgnanization_or_CollegeName",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "_EmailID_AND_PhoneNo",
    //                 "type": "string"
    //             }
    //         ],
    //         "name": "newPersonID",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "constructor"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "",
    //                 "type": "string"
    //             }
    //         ],
    //         "name": "personidDetails",
    //         "outputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "Name",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "Experience",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "Orgnanization_or_CollegeName",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "EmailID_AND_PhoneNo",
    //                 "type": "string"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     }
    // ];

    const contractAbi =  [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_PersonID",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_Name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_Experience",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_Orgnanization_or_CollegeName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_EmailID_AND_PhoneNo",
              "type": "string"
            }
          ],
          "name": "newPersonID",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "name": "personidDetails",
          "outputs": [
            {
              "internalType": "string",
              "name": "Name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "Experience",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "Orgnanization_or_CollegeName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "EmailID_AND_PhoneNo",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ];

    myContract = new web3.eth.Contract(contractAbi, contractAddress);
    console.log("Contract Object: ",myContract);
})