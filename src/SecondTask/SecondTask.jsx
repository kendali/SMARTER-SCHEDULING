import Quote from "../Elements/Quote"

function SecondTask() {
    let desc = <>
                    ENTIRE TASKO  <br />
                    AGENDA for <br />
                    Business <br />
                </>;
    return (
        <div className="quote container mt-5 py-5">
            <div className="row flex-row-reverse align-items-center">
                <Quote taskDesc={desc}  />
            </div>
        </div>
    )
}

export default SecondTask
