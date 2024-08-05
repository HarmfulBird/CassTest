import logo from '/images/image.png';
function Footer()
{
    return(
        <footer>
            <img src={logo} className="logo" alt="Logo"/>
            <p>&copy; SCP Foundation</p>
        </footer>
    );
}

export default Footer;