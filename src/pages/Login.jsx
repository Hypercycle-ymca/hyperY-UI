import { useNavigate, Link } from "react-router-dom"
import facebookIcon from "../assets/facebook.svg"
import googleIcon from "../assets/google.svg"
import appleIcon from "../assets/apple.svg"
import emailIcon from "../assets/email.svg"

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/chat');
    }

    return (
        <main className="flex flex-col gap-4 justify-start sm:items-center sm:text-center">
            <h1 className="text-6xl font-bold sm:hidden">Hyper-Y Chatbot</h1>
            <p className="text-xl sm:text-sm sm:font-semibold">Select a service to Login</p>
            <div className="w-fit flex flex-col mb-4 mt-8 gap-4 text-lg">
                {/* <button className="btn bg-blue-facebook hover:text-white text-white border-none"
                    onClick={handleLogin}
                >
                    <img src={facebookIcon} alt="" />
                    Login with Facebook
                </button> */}
                <button className="btn border border-gray-700 text-gray-950 bg-transparent"
                    onClick={() => window.location.href = 'https://appdemos.hyperpg.site/oauth2/authorization/google'}
                >
                    <img src={googleIcon} alt="" />
                    Login with Google
                </button>
                {/* <button className="btn border border-gray-700 text-gray-950 bg-transparent"
                    onClick={handleLogin}
                >
                    <img src={appleIcon} alt="" />
                    Login with Apple
                </button> */}
                <button className="btn border border-gray-700 text-gray-950 bg-transparent"
                    onClick={handleLogin}
                >
                    <img src={emailIcon} alt="" />
                    Login with Email
                </button>
            </div>
            <p className="font-semibold">
                Don’t have an account?   <Link to="/singup" className="text-primary">Signup</Link>
            </p>
        </main>
    )
}

export default Login
