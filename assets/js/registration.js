import { documentReady } from "./Shared/documentReady";
import MetamaskOnboarding from "./MetamaskOnboarding/MetamaskOnboarding";

documentReady(() => {
    new MetamaskOnboarding();
});
