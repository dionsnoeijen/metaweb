import { documentReady } from "./Shared/documentReady";
import Registration from "./Registration/registration";

documentReady(() => {
    new Registration();
});
