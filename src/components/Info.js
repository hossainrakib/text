import { Link } from "react-router-dom";

function Info({children, text, link}) {
    return ( 
        <div className="info">
        {text} <Link to={link}>{children}</Link> instead.
      </div>
     );
}

export default Info;