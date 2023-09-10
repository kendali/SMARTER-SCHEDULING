import Button  from "../Elements/ButtonMe"

import './Hero.css'

function Hero() {
  return (
    <div className="hero container py-5">
        <div className="row align-items-center gap-3">
            <div className="col-md-7 hero-text">
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
                    <a href="#d"><i class="fa-solid fa-angles-right btn-outline-main p-3 rounded-pill mx-1 color-main"></i></a>
                </div>
            </div>
            <div className="col-md-4 hero-image">
                <img src="https://ucarecdn.com/4c2e57f9-2b7c-4315-91d3-fbc57838733d/undraw_reminder_re_fe15.svg" alt="Hero" className="img-fluid" />
            </div>
        </div>
        <hr className="border border-dark border-1 mt-5"/>
    </div>
  )
}

export default Hero
