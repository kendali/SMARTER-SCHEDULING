import React from 'react'

function Quote({taskDesc}) {
    return (
        <>
            <div className="col-lg-6 quote-img d-none d-lg-block">
                <img src="https://ucarecdn.com/4c2e57f9-2b7c-4315-91d3-fbc57838733d/undraw_reminder_re_fe15.svg" alt="" />
            </div>
            <div className="col-lg-6 quote-text d-flex flex-column gap-3">
                <h2 className="display-3 fw-medium">
                    {taskDesc}
                </h2>
                <p className="lead w-75">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsam iusto quaerat cumque velit quibusdam?
                </p>
                <div className="button d-flex align-items-center gap-3 ">
                    <a href="#d">
                        <i class="fa-solid fa-angles-right btn-outline-main p-3 rounded-pill mx-1 color-main"></i>
                    </a>
                    <p className="lead fw-semibold">START A FREE TRIAL 14-DAY TRAIL</p>
                </div>
            </div>
        </>
    )
}

export default Quote
