import ButtonMe from '../Elements/ButtonMe'
import './Header.css'

function Navbar() {

    const listNav = [
        {id:0,items:'Home'},
        {id:1,items:'Features'},
        {id:2,items:'Blog'},
        {id:3,items:'Pricing'}
    ]
    const navItem = listNav.map((item)=>(
        <li key={item.id} className='nav-item'><a href="#d" className='nav-link fs-5 fw-semibold'>{item.items}</a></li>
    ))
    return (
        <nav className="navbar navbar-expand-lg py-5 py-xl-0">
            <div className="container-fluid">
                <a className="navbar-brand fs-1" href="#h">
                    <i class="fa-brands fa-usps color-main"></i>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa-solid fa-bars-progress fs-3"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {navItem}
                    </ul>
                <div className="button d-flex gap-3 align-items-center">
                    <span className='phone-number fw-semibold'>(+1) 253 3903</span>
                    <a href="#d" className='my-a'>Login</a>
                    <ButtonMe btnTitle='Get Started' />
                </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
