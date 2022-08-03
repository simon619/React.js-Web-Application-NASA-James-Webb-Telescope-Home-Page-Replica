import pic from './Image/skull.png'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Sorry..............</h1>
            <p>Someone Stole The Blog Your Are Looking For.....HA HA HA</p>
            <img src={ pic } alt="Skull"/><br/>
            <Link to="/">Home Page</Link>
        </div>
     );
}
 
export default NotFound;
