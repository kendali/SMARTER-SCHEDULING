import Quote from "../Elements/Quote"

function FirstTask() {
    const desc = <>
                    DYNAMICALLY  <br />
                    SHIFT EVENTS <br />
                    FOR FREE <br />
                </>

    
    return (
        <div className="quote container mt-5 py-5">
            <div className="row align-items-center">
                <Quote taskDesc={desc} />
            </div>
        </div>
    )
}

export default FirstTask
