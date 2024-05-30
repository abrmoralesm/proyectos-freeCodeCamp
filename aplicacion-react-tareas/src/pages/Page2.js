import { Link } from "react-router-dom";
import Home from "../componentes/Home";
import Menu from "../componentes/Menu";
const Page2 = () => (
  <div>
    <div>
      <h1>PÁGINA 2</h1>
      <Menu/>
      <Home />
      <ul>
        <li>
          
          <Link to={process.env.PUBLIC_URL}>Jander</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/page2"}>Page2</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/ajksdfkjhasdk"}>
            Error en la url
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Page2;
