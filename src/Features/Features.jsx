import Feature from "./Feature"


function Features() {
  return (
    <div className="features container mt-5 py-5 d-flex flex-column flex-lg-row gap-5 justify-content-between gap-2">
      <div className="feature">
        <div className="feature-title">
            <span className="display-4 fw-medium">14M+</span>
        </div>
        <div className="feature-description">
            <p className="lead fw-medium">
                Engage new audience
            </p>
        </div>

      </div>
      <Feature 
        icon='fa-solid fa-clipboard-check text-light bg-danger p-3 rounded-pill fs-4'
        title='Flexible time blocking'
        description='You can block a specific time slot for a specific user'
         />
         <Feature 
        icon='fa-solid fa-circle-check text-light bg-success p-3 rounded-pill fs-4'
        title='Task Management'
        description='Your agenda and shifts events from free to Busy as you get'
         />
         <Feature 
        icon='fa-solid fa-check-double text-light bg-primary p-3 rounded-pill fs-4'
        title='Smart Routine'
        description="You can groom your backlog as much as you like ,but if it's not"
         />

    </div>
  )
}

export default Features
