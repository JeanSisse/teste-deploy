import useStyles from './style';
import homeImg from '../../assets/home.svg';
import homeClicked from '../../assets/home-clicked.svg';
import clientsImg from '../../assets/clients.svg';
import clientsClicked from '../../assets/clients-clicked.svg';
import sideBar from '../../assets/aside-clicked.svg';
import chargesImg from '../../assets/charges.svg';
import chargesClicked from '../../assets/charges-clicked.svg';
import { Link } from "react-router-dom";
import useGlobal from '../../Hooks/Hook-Global/useGlobal'

function Aside() {
    const classes = useStyles();
    const { currentPage, setCurrentPage } = useGlobal();
    const handleClickNavigation = (event) => {
        const target = event.target.alt;

        if (target === "Home") {
            return setCurrentPage('home');

        } else if (target === "Clientes") {
            return setCurrentPage('cliente')

        } else if (target === "Cobranças") {
            return setCurrentPage('charge')
        }

    }
    return (
        <aside className={classes.aside}>
            <div className={classes.asideImg}>
                <div className={classes.displayRow}>

                    <Link to='home'>
                        <img src={currentPage === 'home' ? homeClicked : homeImg} alt="Home" className={classes.img} onClick={handleClickNavigation} />
                    </Link>
                    {currentPage === 'home' && <img src={sideBar} alt="side-bar" className={classes.sideBar} />}
                </div>
                <div className={classes.displayRow}>
                    <Link to='cliente'>
                        <img src={currentPage === 'cliente' ? clientsClicked : clientsImg} alt="Clientes" className={classes.img} onClick={handleClickNavigation} />
                    </Link>
                    {currentPage === 'cliente' && <img src={sideBar} alt="side-bar" className={classes.sideBar} />}
                </div>
                <div className={classes.displayRow}>
                    <img src={currentPage === 'charge' ? chargesClicked : chargesImg} alt="Cobranças" className={classes.img} onClick={handleClickNavigation} />
                    {currentPage === 'charge' && <img src={sideBar} alt="side-bar" className={classes.sideBar} />}
                </div>
            </div>

        </aside>
    );
}

export default Aside;