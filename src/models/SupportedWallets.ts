import { IAccountOption, SupportedAccountTypes } from "./SupportedAccountTypes";

export enum SupportedWallets {
    BITCOIN = "Bitcoin",
    ETHEREUM = "Ethereum"
}

export interface IWalletInfo {
    name: SupportedWallets;
    type: SupportedAccountTypes;
    options: IAccountOption[];
}

export const SupportedWalletInfo: IWalletInfo[] = [
    {
        name: SupportedWallets.BITCOIN,
        type: SupportedAccountTypes.WALLET,
        options: [
            {
                id: 'address',
                label: 'Address'
            },
        ]
    },
    {
        name: SupportedWallets.ETHEREUM,
        type: SupportedAccountTypes.WALLET,
        options: [
            {
                id: 'address',
                label: 'Address'
            },
        ]
    },
]
