import { useNavigate } from 'react-router-dom';
import '../css/header.css'
const Header = ()=>{
const navigate = useNavigate();


    return(
        <>
          <header>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <input type="checkbox" name="" id="ckk"/>
                <div class="logo_"><h1>Safari Escapes</h1></div>
                <div class="search-box">
                    <form action="">
                        <input type="text" name="Search" placeholder="Search..." id="srch"/>
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </div>
                <ul>
                    <li><a onClick={()=>{navigate('/')}}>home</a></li>
                    <li><a onClick={()=>{navigate('/services')}}>Services</a></li>
                    <li><a onClick={()=>{navigate('/aboutus')}}>about</a></li>
                    <li><a onClick={()=>{navigate('/contactus')}}>contact</a></li>
                </ul>
                <div class="menu">
                    <label for="ckk">
                        <i class="fa fa-bars"></i>
                    </label>
                </div>
            </header>
        </>
    );
};
export default Header;