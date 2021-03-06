# Personal Crypto

[![Chrome Web Store Version](https://img.shields.io/chrome-web-store/v/lgfflokdinmbpcjnhkdaiajfgalpnkcl?style=flat-square)][store_link]
[![Chrome Web Store Users](https://img.shields.io/chrome-web-store/users/lgfflokdinmbpcjnhkdaiajfgalpnkcl?style=flat-square)][store_link]
[![Chrome Web Store Ratings](https://img.shields.io/chrome-web-store/rating/lgfflokdinmbpcjnhkdaiajfgalpnkcl?style=flat-square)][store_link]

[store_link]:  https://chrome.google.com/webstore/detail/personal-crypto/lgfflokdinmbpcjnhkdaiajfgalpnkcl


Personal Crypto is a free chrome extension for connecting your cryptocurrency exchanges and wallets to your [Personal Capital](https://pcap.rocks/adamwoo) dashboard. It will also update manually entered holding prices as long as the ticker is prefixed with "CRYPTO " (eg. "CRYPTO BTC").

UPDATE: Personal Crypto now supports Personal Capital's Cryptocurrency BETA accounts. These accounts update the price natively, and therefore do not need to have the "CRYPTO" prefix. If connected to an exchange, the quantity will still be updated based on the ticker.

This project is still in development, so all feedback is welcome.

- [Personal Crypto](#personal-crypto)
  - [Supported Accounts](#supported-accounts)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Disclaimer](#disclaimer)
  - [Contributing](#contributing)
  - [Donations](#donations)
  - [License](#license)

## Supported Accounts

| Account Types                                                      | Date Added    | Notes         |
| ------------------------------------------------------------------ | ------------- | ------------- |
| [Binance US](https://accounts.binance.us/en/register?ref=52184783) | 01/07/2021    |               |
| [Coinbase](https://www.coinbase.com/join/woo_sxd)                  | 01/07/2021    |               |
| [Coinbase Pro](https://www.coinbase.com/join/woo_sxd)              | 01/07/2021    |               |
| Bitcoin Wallets                                                    | 01/11/2021    |               |
| Ethereum Wallets                                                   | 01/14/2021    |               |
| [KuCoin](https://www.kucoin.com/ucenter/signup?rcode=rJUS6T9)      | 04/17/2021    | API key requires "TRADE" security in order to pull lended asset balances |

## Installation

This extension is available on the [Chrome Web Store](https://chrome.google.com/webstore/detail/personal-crypto/lgfflokdinmbpcjnhkdaiajfgalpnkcl).

You can also load this extension by following these steps:

1. Clone this repository
2. Install the dependencies with ```npm install && cd src/popup && npm install```. (You will need NPM installed)
3. Build the extension with npm scripts
4. Load the unpacked extension onto your browser in developer mode. 

## Usage

1. Create a manual investment holding account in Personal Capital. Make sure to give it a unique name.
2. Create an API key with your exchange. (Be sure to set permissions to READ ONLY. See disclaimer below.)
3. Open the extension popup.
4. Click the "Add Account" menu option.
5. Search for a supported account type.
6. Select your crypto account type and fill in the information. (Make sure that this Account Name matches the Personal Capital account name.)
7. Click Create. (Correct any validation issues and try again.)
8. Refresh your Personal Capital browser tab

Your account holdings will be automatically added to your Personal Capital manual account. It may take a bit to display on the site. You can check the browser console to see what has been updated by pressing ```F12```.

## Disclaimer

This project was developed for fun. Use this extension at your own risk. I am not responsible for any consequences of using this project, including but not limited to:

- any funds lost from improperly secured API keys. API keys added to this extension are not secure by default and could potentially be accessed by the browser. "Read only" security should be set on the exchange when creating the API key. API secret keys are never sent to from your browser by this application unless in an encrypted request signature.
- any actions taken by Personal Capital for Terms of Service violations. I have contacted Personal Capital support and recieved permission for this extension, but cannot guarantee permissions should Personal Capital change their Terms of Service.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Donations

If you find this extension useful and would like to support my work, you can send donations to the addresses below. This helps me keep the proxy server running.

| Asset | Address                                          |
| ----- | ------------------------------------------------ |
| BTC   | ```bc1qgcgggt7gda7rlh93tjju7qnxxxg5yqwyt0z65u``` |
| ETH   | ```0x4098C4A74F7a55a72A8de2ecf37Ef50c3a887D50``` |


Thank you!

## License
[GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)
