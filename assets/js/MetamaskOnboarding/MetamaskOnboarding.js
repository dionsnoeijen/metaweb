'use strict';

import MetaMaskOnboarding from '@metamask/onboarding';
import { metamaskElements } from "./elements/metamaskElements";
import { isMetaMaskInstalled } from "./isInstalled";

// Async / Await polyfill
import "core-js/stable";
import "regenerator-runtime/runtime";

const TEXT_DEFAULT_INSTALL_METAMASK = 'Click here to install MetaMask!';
const TEXT_DEFAULT_CONNECT_METAMASK = 'Connect';
const TEXT_DEFAULT_ONBOARDING_PROGRESS = 'Onboarding in progress';

export default class MetamaskOnboarding
{
    constructor() {
        this.elements = metamaskElements();
        this.onboarding = new MetaMaskOnboarding();
        this.clickConnectButton = this.onClickConnectButton.bind(this);

        this.init();
    }

    init() {
        const installMetaMaskText =
            this.elements.connectButton.getAttribute('data-install-metamask-text') ??
            TEXT_DEFAULT_INSTALL_METAMASK;
        const connectMetaMaskText =
            this.elements.connectButton.getAttribute('data-connect-text') ??
            TEXT_DEFAULT_CONNECT_METAMASK;

        if (!isMetaMaskInstalled()) {
            this.elements.connectButton.innerText = installMetaMaskText;
        } else {
            this.elements.connectButton.innerText = connectMetaMaskText;
        }
        this.addEventListeners();
    }

    addEventListeners() {
        this.elements.connectButton.addEventListener('click', this.clickConnectButton);
    }

    async onClickConnectButton(event) {
        event.preventDefault();
        if (!isMetaMaskInstalled()) {
            this.install();
        } else {
           await this.connect();
        }
    }

    async connect() {
        try {
            const { ethereum } = window;
            await ethereum.request({ method: 'eth_requestAccounts' });
        } catch (error) {
            console.error(error);
        }
    }

    install() {
        this.elements.connectButton.innerText =
            this.elements.connectButton.getAttribute('data-onboarding-in-progress-text') ??
            TEXT_DEFAULT_ONBOARDING_PROGRESS;
        this.elements.connectButton.disabled = true;
        this.onboarding.startOnboarding();
    }
}
