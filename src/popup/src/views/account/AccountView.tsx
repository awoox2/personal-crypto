import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useAccountActions } from "../../navigators/RootNavigatorContext";

import { Button, Divider, Modal, Paper, TextField, Typography } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";
import { Header } from "../../assets/components/Header";

import { PersonalCryptoAccount } from "../../../../models/PersonalCryptoAccount";
import { IExchangeInfo, SupportedExchangeInfo } from "../../../../models/SupportedExchanges";
import { IWalletInfo, SupportedWalletInfo } from "../../../../models/SupportedWallets";

export const AccountView = observer((props: { account?: PersonalCryptoAccount }) => {
    const { deleteAccount } = useAccountActions()
    const history = useHistory()
    const { account } = props
    const [modalVisible, setModalVisible] = useState(false)
    let accountInfo: IExchangeInfo | IWalletInfo | undefined;
    if (account?.exchange) {
        accountInfo = SupportedExchangeInfo.find((exchange) => exchange.name === props.account?.exchange)
    }
    else if (account?.wallet) {
        accountInfo = SupportedWalletInfo.find((wallet) => wallet.name === props.account?.wallet)
    }

    const handleDelete = () => {
        console.log('Delete Pressed')
        if (account) deleteAccount(account)
        setModalVisible(false)
        history.goBack()
    }

    const DeleteModal = () => {
        return (
            <Modal
                open={modalVisible}
                style={{ margin: '20px', justifyContent: 'center' }}
                onBackdropClick={() => setModalVisible(false)}>
                <Paper style={{ padding: '10px' }}>
                    <Typography style={{ marginBottom: '10px' }}>
                        Are you sure you want to delete this account?
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Button variant="contained" onClick={() => setModalVisible(false)}>
                            Close
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleDelete}>
                            Delete
                        </Button>
                    </div>
                </Paper>
            </Modal>
        )
    }

    return (
        <div>
            <Header
                title={account?.exchange || account?.wallet}
                right={<DeleteOutline />}
                rightOnClick={() => setModalVisible(true)} />
            <Divider />
            <DeleteModal />
            <div style={{ padding: '10px' }}>
                <TextField
                    style={{ width: "100%" }}
                    label="Account Name"
                    value={account?.name}
                    disabled />
                {accountInfo?.options.map((option) => (
                    < TextField
                        style={{ width: "100%" }}
                        label={option.label}
                        value={account?.options[option.id]}
                        type={option.secure ? "password" : "text"}
                        disabled />
                ))}
            </div>
        </div>
    );
})