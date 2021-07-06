import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerNotes"> 
                Developed by: JanBCodes          
                    <Link to={`https://github.com/JanBCodes`} target="_blank">
                        <i className="fab fa-github"> </i>
                    </Link>
            </div>
        </div>
    )
}

export default Footer;
