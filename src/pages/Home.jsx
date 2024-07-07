import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa";

function Home()   {

    return (
        <>
        <h1>Hello World</h1>
        <div className="social">
            <a href="https://facebook.com">
            <FaFacebook fontSize={"40px"}/>
            </a>
            <a href="https://github.com">
            <FaGithub fontSize={"40px"}/>
            </a>
            <a href="https://linkedin.com">
            <FaLinkedin fontSize={"40px"}/>
            </a>
        </div>
        </>
    )
}

export default Home;