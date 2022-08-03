import logo from './Image/logo.png'

const Footer = () => {
    return ( 
        <div className="foot">
            <img src={ logo } alt="logo"/>
            <p>
                National Aeronautics and Space Administration <br/>
                Page Last Updated: Jul 12, 2022<br/>
                Page Editor: Brian Dunbar<br/>
                NASA Official: Brian Dunbar
            </p>
        </div>
     );
}
 
export default Footer;
