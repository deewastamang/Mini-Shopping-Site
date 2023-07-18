import { redirect } from "react-router-dom";
import store from "./features/store";

const requireAuth = async () => {
    const reduxStore = store.getState();
    const logInStatus = reduxStore.logIn.isLoggedIn
    
    if(!logInStatus) {
        throw redirect('/login/?message=You must login first');
    }
}

export default requireAuth;