//import { ErrorMessage } from "../components/ErrorMessage";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
      <section>
        <h1>Not Found</h1>
        <Link to={"/"} >Volver a la página de inicio</Link>
      </section>
    );
  };
