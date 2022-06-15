require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remember pudding idea prison tail gentle'; 
let testAccounts = [
"0x285a8fa315a76b92576f552f3fc3882b8a0903e8a4d0fd3d79dc0e48f8afbd30",
"0x4dd100fbebce10037c72cc308b618175177d616ca581f5c78f4aa301b43cd3a8",
"0x90f5ab2d1df337c30df1b1576953218604356c5e5786877365c30a2d6b07fc24",
"0x3e68d2f5188d49e8e61dbfa803e7a8335478b4915d506436391f496f4d4f4217",
"0x9f6aa1c725183a9fe74351c7dd09f1ae576c7fc94a913d18c8dbd609c25a3182",
"0x0a20ef214753ba94d067862dd6275bfe61ff7b5a2da1115bc53c0a7880b5b62a",
"0x745b931115c05ec78ef277eac6d68e48a85d1b4d6d218640a5d170fc3958f271",
"0x8bc37eec99dee69eeae8379c51d7e7ba518dfcbe85a3f43b2ad5a7ba5b1d9b8d",
"0x179c0c485d6009ae53340e9afe581e91737deaab6ea9007a93ae245a04316945",
"0xc134330ea0ac9f0d4eb817332e8453be87c8535d1a9ddd588521036b1dd91167"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

