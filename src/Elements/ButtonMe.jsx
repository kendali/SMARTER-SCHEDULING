import './ButtonMe.css'
function ButtonMe({btnTitle}) {
  return (
    <>
        <a href="#btn" className="btn-main rounded-pill fs-5 fw-semibold">{btnTitle}</a>
    </>
  )
}

export default ButtonMe
