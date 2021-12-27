require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad gloom knee sure sport'; 
let testAccounts = [
"0xf03a671bb01ed4acfb1d35127204d91abef88d47dca1020c8955928da2f7b540",
"0xe65765e492bd905ab7c8670334259760cf1b8049152db9c4733ec1fa6737cf8f",
"0xa99a9c72be9dfb242e2bd4ab497f6b113818df2ce4d283c76a9ec43a21308e7a",
"0xa39f6f88a9424ce44fef8d87151157edcc73ab5800cd03ac0aa19693a77b97b3",
"0xbd987252dd794706018b4a9608f6bfdd8844ff413ef3192dd5e1c7bd1991e94c",
"0x94d020415de96e8a102aa4ebb4aded9a41af1d37a0fccb677579aacb73d79df8",
"0x7a6cdcc9bed2d59ec2525ab8a01d91739ac9cfe150866ffc2a3044976e6084e1",
"0xbabcb534fc18adce51c3574e0fe54cb8dc7390ad52c2e5e4da85e16c5edcfad1",
"0x6a3b0f34d8cb0602039dde91c5730c78fce16bc666a041199215d4bc45196784",
"0x9589bdffb28e667ce9630694703e8f364ca61553154da2e7c181b0b81632325e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


