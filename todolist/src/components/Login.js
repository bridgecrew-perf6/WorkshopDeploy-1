import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import App from "../App";
import { auth } from "../firebase";

const provider = new GoogleAuthProvider();

const Login = () => {
    const signInWithGoogle = async () => {
        signInWithPopup(auth, provider).then((result) => {
            const user = result.user;
            console.log(user);
        })
    }

    return (<div><button value="login" onClick={signInWithGoogle}> Log In</button>
    </div>
    );
};

export default Login;