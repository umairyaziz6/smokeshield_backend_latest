const contractABI = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "getCigaretteById",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "manufacturer",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          }
        ],
        "internalType": "struct Cigarette",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCigarettes",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "manufacturer",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          }
        ],
        "internalType": "struct Cigarette[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getRecords",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "product",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "customer_age",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "customer_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "ic",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "retailer",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "date_purchase",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "created_at",
            "type": "uint256"
          }

        ],
        "internalType": "struct Record[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "product",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "customer_age",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "customer_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "ic",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "retailer",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "date_purchase",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "created_at",
        "type": "uint256"
      }
    ],
    "name": "createRecord",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "product",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "customer_age",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "customer_name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "ic",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "retailer",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "date_purchase",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "created_at",
        "type": "uint256"
      }
    ],
    "name": "RecordCreated",
    "type": "event"
  }

];

export default contractABI;