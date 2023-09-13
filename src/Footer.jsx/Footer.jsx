import './Footer.css'
function Footer() {
  return (
    <>
    <div className="container footer-content mt-5 py-5">
      <div className="cr-bottom"></div>
      <h6 className='tsko display-5 fw-semibold'>Tasko</h6>
    </div>
    <div className="footer-nav container d-flex justify-content-between align-items-center">
        <div className='copyright'>
            <p className='link' >&copy;2023,all right reserved</p>
        </div>
        <div className='terms d-flex align-items-center gap-5'>
            <p className='link'>Terms & Conditions</p>
            <p className='link'>Privacy policy</p>
        </div>
    </div>
    </>
    
  )
}

export default Footer
