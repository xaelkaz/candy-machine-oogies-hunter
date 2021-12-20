import React, { useEffect, useState } from 'react';
import LaunchButton from '../components/features/LaunchButton';
import {
    awaitTransactionSignatureConfirmation,
    CandyMachine,
    getCandyMachineState,
    mintOneToken,
    shortenAddress
} from "../candy-machine";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Countdown from "react-countdown";
import Alert from "@material-ui/lab/Alert";
import styled from "styled-components";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import * as anchor from "@project-serum/anchor";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

const ConnectButton = styled(WalletDialogButton)`
  line-height: 50px;
  border-radius: 5px;
  font-weight: 500;
  color: #fff;
  top-margin: 25px !important;
  border: 1px solid #fff;
  margin-top: 15px;
  font-size: 24px !important;
  text-align: center !important;
  font-family: 'Bangers' !important;
  font-size: 24px;

  transition: all 0.6s ease-in-out;`;

const CounterText = styled.span``; // add your styles here

const MintContainer = styled.div``; // add your styles here

const MintButton = styled(Button)`
  line-height: 50px;
  border-radius: 5px;
  font-weight: 500;
  color: #fff;
  border: 1px solid #fff;
  margin-top: 15px;
  width: 100%;
  text-align: center !important;
  font-family: 'Bangers';
  font-size: 24px;
  background: linear-gradient(270deg,
  rgb(220, 31, 255) 15%,
  rgb(0, 255, 163) 125%);
  transition: all 0.6s ease-in-out;
`; // add your styles here

export interface HomeProps {
    candyMachineId: anchor.web3.PublicKey;
    config: anchor.web3.PublicKey;
    connection: anchor.web3.Connection;
    startDate: number;
    treasury: anchor.web3.PublicKey;
    mintingAvailable: boolean;
    txTimeout: number;
}

const OogiesBanner = (props: HomeProps) => {
    const [balance, setBalance] = useState<number>();
    const [isActive, setIsActive] = useState(false); // true when countdown completes
    const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
    const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

    const [itemsAvailable, setItemsAvailable] = useState(0);
    const [itemsRedeemed, setItemsRedeemed] = useState(0);
    const [itemsRemaining, setItemsRemaining] = useState(0);

    const [alertState, setAlertState] = useState<AlertState>({
        open: false,
        message: "",
        severity: undefined,
    });

    console.log(props.startDate)
    const [startDate, setStartDate] = useState(new Date(props.startDate));

    const wallet = useAnchorWallet();
    const [candyMachine, setCandyMachine] = useState<CandyMachine>();

    const refreshCandyMachineState = () => {
        (async () => {
            if (!wallet) return;

            const {
                candyMachine,
                goLiveDate,
                itemsAvailable,
                itemsRemaining,
                itemsRedeemed,
            } = await getCandyMachineState(
                wallet as anchor.Wallet,
                props.candyMachineId,
                props.connection
            );

            setItemsAvailable(itemsAvailable);
            setItemsRemaining(itemsRemaining);
            setItemsRedeemed(itemsRedeemed);

            setIsSoldOut(itemsRemaining === 0);
            setStartDate(goLiveDate);
            setCandyMachine(candyMachine);
        })();
    };

    const onMint = async () => {
        try {
            setIsMinting(true);
            if (wallet && candyMachine?.program) {
                const mintTxId = await mintOneToken(
                    candyMachine,
                    props.config,
                    wallet.publicKey,
                    props.treasury
                );

                const status = await awaitTransactionSignatureConfirmation(
                    mintTxId,
                    props.txTimeout,
                    props.connection,
                    "singleGossip",
                    false
                );

                if (!status?.err) {
                    setAlertState({
                        open: true,
                        message: "Congratulations! Mint succeeded!",
                        severity: "success",
                    });
                } else {
                    setAlertState({
                        open: true,
                        message: "Mint failed! Please try again!",
                        severity: "error",
                    });
                }
            }
        } catch (error: any) {
            // TODO: blech:
            let message = error.msg || "Minting failed! Please try again!";
            if (!error.msg) {
                if (error.message.indexOf("0x138")) {
                } else if (error.message.indexOf("0x137")) {
                    message = `SOLD OUT WHITELIST!`;
                } else if (error.message.indexOf("0x135")) {
                    message = `Insufficient funds to mint. Please fund your wallet.`;
                }
            } else {
                if (error.code === 311) {
                    message = `SOLD OUT WHITELIST!`;
                    setIsSoldOut(true);
                } else if (error.code === 312) {
                    message = `Minting period hasn't started yet.`;
                }
            }

            setAlertState({
                open: true,
                message,
                severity: "error",
            });
        } finally {
            if (wallet) {
                const balance = await props.connection.getBalance(wallet.publicKey);
                setBalance(balance / LAMPORTS_PER_SOL);
            }
            setIsMinting(false);
            refreshCandyMachineState();
        }
    };

    useEffect(() => {
        (async () => {
            if (wallet) {
                const balance = await props.connection.getBalance(wallet.publicKey);
                setBalance(balance / LAMPORTS_PER_SOL);
            }
        })();
    }, [wallet, props.connection]);

    useEffect(refreshCandyMachineState, [
        wallet,
        props.candyMachineId,
        props.connection,
    ]);

    return (
        <div className='hero-banner-four' id='home'>
            <div className='inner-container'>

                {wallet && (
                    <p>Wallet {shortenAddress(wallet.publicKey.toBase58() || "")}</p>
                )}

                {wallet && <p>Balance: {(balance || 0).toLocaleString()} SOL</p>}

                {wallet && <p>Total Available: {itemsAvailable}</p>}

                {wallet && <p>Redeemed: {itemsRedeemed}</p>}

                {wallet && <p>Remaining: {itemsRemaining}</p>}

                <Snackbar
                    open={alertState.open}
                    autoHideDuration={6000}
                    onClose={() => setAlertState({ ...alertState, open: false })}
                >
                    <Alert
                        onClose={() => setAlertState({ ...alertState, open: false })}
                        severity={alertState.severity}
                    >
                        {alertState.message}
                    </Alert>
                </Snackbar>


                <img
                    src='images/shape/9.svg'
                    alt='shape'
                    className='shapes shape-four'
                />

                <img
                    src='images/shape/102.svg'
                    alt='shape'
                    className='shapes shape-six'
                />

                <img
                    src='images/preview/shape03.svg'
                    alt='shape'
                    className='shapes shape-seven'
                />

                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 order-lg-first'>
                            <div className='illustration-holder'>
                                <img
                                    data-aos='fade-up'
                                    data-aos-duration='1200'
                                    src='images/oogieoriginal1.png'
                                    alt='shape'
                                    className='illustration'
                                />
                            </div>
                        </div>
                        {/* End .col */}

                        <div className='col-lg-6 order-lg-last'>
                            <div className='text-wrapper'>
                                <h1
                                    className='text-center'
                                    data-aos='fade-up'
                                    data-aos-duration='1200'
                                >
                                    <span>LAUNCHED ON</span>
                                </h1>
                                <p
                                    className='sub-text aos-init aos-animate'
                                    data-aos='fade-up'
                                    data-aos-duration='1200'
                                    data-aos-delay='100'
                                >
                                    Remember your collectables when you were a child, well here
                                    you have 500 friendly Oogies to remember those moments.
                                </p>
                                <div className='pricing-table-area-five md-mt-20'>
                                    <img
                                        src='images/shape/202.svg'
                                        alt='icon'
                                        className='shapes shape-one'
                                    />
                                    <div className="row align-items-center">
                                        <div className="col-md-12">
                                            <div className={`pr-table-wrapper text-center active`}>
                                                {!props.mintingAvailable &&
                                                    <div className="price">22th December 16:00P UTC</div>

                                                }
                                                {props.mintingAvailable &&
                                                    <>
                                                        <div className="price">22th December 13:00P UTC</div>
                                                        {!wallet ? (
                                                            <ConnectButton>Connect Wallet</ConnectButton>
                                                        ) : (
                                                            <button
                                                                disabled={isSoldOut || isMinting || !isActive || itemsRemaining === 300}
                                                                onClick={onMint}
                                                                className="trial-button hover-reverse-gr-bg-one"
                                                            >
                                                                {isSoldOut && itemsRemaining === 300 ? (
                                                                    "SOLD OUT WHITELIST"
                                                                ) : isActive ? (
                                                                    isMinting ? (
                                                                        <CircularProgress />
                                                                    ) : (
                                                                        "MINT WHITELIST"
                                                                    )
                                                                ) : (
                                                                    <Countdown
                                                                        date={startDate}
                                                                        onMount={({ completed }) => completed && setIsActive(true)}
                                                                        onComplete={() => setIsActive(true)}
                                                                        renderer={renderCounter}
                                                                    />
                                                                )}
                                                            </button>
                                                        )}
                                                    </>
                                                }
                                            </div>
                                            {/* /.pr-table-wrapper */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /.text-wrapper */}
                        </div>

                        {/* /.pricing-table-area-five */}
                        {/* End .col */}
                    </div>
                </div>
            </div>
            {/* /.fancy-feature-eight */}
        </div>
    );
    //  {/* /.hero-banner-four */}
};

interface AlertState {
    open: boolean;
    message: string;
    severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
    return (
        <CounterText>
            {hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds
        </CounterText>
    );
};

export default OogiesBanner;
