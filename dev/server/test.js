const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const bc1 = {
    "chain": [
        {
            "index": 1,
            "timestamp": 1545733796658,
            "transactions": [],
            "nonce": 100,
            "hash": "0",
            "previousBlockHash": "0"
        },
        {
            "index": 2,
            "timestamp": 1545733887293,
            "transactions": [],
            "nonce": 18140,
            "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
            "previousBlockHash": "0"
        },
        {
            "index": 3,
            "timestamp": 1545733948584,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "062d1120083011e9aed621ebbcdf1863",
                    "transactionId": "3c3c54b0083011e9aed621ebbcdf1863"
                },
                {
                    "amount": 4000,
                    "sender": "QQKEFKWERFSDFSDSDGFEFWEFR",
                    "recipient": "CCCOVCBDLKJNWERTYJFVDCSDWFETH",
                    "transactionId": "4be08ad0083011e9aed621ebbcdf1863"
                },
                {
                    "amount": 100000,
                    "sender": "AAQQKEFKWERFSDFSDSDGFEFWEFR",
                    "recipient": "BBCCCOVCBDLKJNWERTYJFVDCSDWFETH",
                    "transactionId": "5206a390083011e9aed621ebbcdf1863"
                },
                {
                    "amount": 10,
                    "sender": "TTAAQQKEFKWERFSDFSDSDGFEFWEFR",
                    "recipient": "VVBBCCCOVCBDLKJNWERTYJFVDCSDWFETH",
                    "transactionId": "580b2a90083011e9aed621ebbcdf1863"
                }
            ],
            "nonce": 51709,
            "hash": "00000a972f625bc15060d51e68c9ccd91d01a3ba9840e4c71344c4e3125d0e7c",
            "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
        },
        {
            "index": 4,
            "timestamp": 1545733989569,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "062d1120083011e9aed621ebbcdf1863",
                    "transactionId": "60bbe5d0083011e9aed621ebbcdf1863"
                },
                {
                    "amount": 90,
                    "sender": "YYTTAAQQKEFKWERFSDFSDSDGFEFWEFR",
                    "recipient": "NNVVBBCCCOVCBDLKJNWERTYJFVDCSDWFETH",
                    "transactionId": "6bdfc3f0083011e9aed621ebbcdf1863"
                },
                {
                    "amount": 2,
                    "sender": "UUYYTTAAQQKEFKWERFSDFSDSDGFEFWEFR",
                    "recipient": "IINNVVBBCCCOVCBDLKJNWERTYJFVDCSDWFETH",
                    "transactionId": "74035a60083011e9aed621ebbcdf1863"
                }
            ],
            "nonce": 116934,
            "hash": "0000ff766f54fbd2630ce0bfc6217d89d73eacfd06930d0f0e9372ee2ae35cdd",
            "previousBlockHash": "00000a972f625bc15060d51e68c9ccd91d01a3ba9840e4c71344c4e3125d0e7c"
        }
    ],
    "pendingTransactions": [
        {
            "amount": 12.5,
            "sender": "00",
            "recipient": "062d1120083011e9aed621ebbcdf1863",
            "transactionId": "7929b660083011e9aed621ebbcdf1863"
        }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
};

console.log('VALID: ' + bitcoin.chainIsValid(bc1.chain))

// const previousBlockHash = 'e4a21352101f71eaf53326984eaad9ie8f6795deffbfb86bab4c6bcdd6854bd4';
// const currentBlockData = [
//     {
//         amount: 10,
//         sender: '7H487FH45',
//         recipient: 'LKTRH89H90'
//     },
//     {
//         amount: 130,
//         sender: '7H487RGFERFH45',
//         recipient: 'LKERFERTRH89H90'
//     },
//     {
//         amount: 150,
//         sender: '7H487F324H45',
//         recipient: 'L23423KTRH89H90'
//     }
// ];
// const nonce = 100;
// console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 36578));

// bitcoin.createNewBlock(2389, 'SGF4YGERFYUE', '7AHDAS87DG');

// bitcoin.createNewTransaction(100, 'ALEXWREF', 'JENNGFGV');

// bitcoin.createNewBlock(239, 'SGF4ERFYUE', '7AS87DG');

// bitcoin.createNewTransaction(600, 'ALEXWREF', 'JENNGFGV');
// bitcoin.createNewTransaction(800, 'ALEXWREF', 'JENNGFGV');
// bitcoin.createNewTransaction(170, 'ALEXWREF', 'JENNGFGV');

// bitcoin.createNewBlock(349, 'SGFFF4ERFYUE', 'ASD47AS87DG');


console.log(bitcoin);