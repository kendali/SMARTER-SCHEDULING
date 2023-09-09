import Button  from "../Elements/ButtonMe"

import './Hero.css'

function Hero() {
  return (
    <div className="hero container py-5">
        <div className="row align-items-center">
            <div className="col-md-6 hero-text">
                <div className="hero-text-header">
                    <h1 className="display-1 fw-semibold">
                        SMARTER  <br />
                        SCHEDULING  <br />
                        SYSTEM <br />
                    </h1>
                </div>
                <div className="hero-text-body w-50">
                    <p className="lead fw-medium">
                        Smarter scheduling system is a web application that helps you to manage your schedules.
                    </p>
                </div>
                <div className="hero-text-footer">
                    <Button btnTitle='Get Started' />
                    <i class="fa-solid fa-angles-right btn-outline-main p-3 rounded-pill mx-1"></i>
                </div>
            </div>
            <div className="col-md-6 hero-image">
                <img src="https://img.freepik.com/free-vector/flat-man-checking-giant-check-list-background_23-2148091572.jpg?w=740&t=st=1694271378~exp=1694271978~hmac=7b5b9ce24e5c8c42ebd2332c8b3271325dba9a01c04d1ffa03ed42c034cccfcc" alt="" />
            </div>
        </div>
        <hr className="border border-dark border-1 mt-5"/>
    </div>
  )
}

export default Hero
