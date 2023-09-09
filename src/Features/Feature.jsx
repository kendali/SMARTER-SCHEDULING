
function Feature({icon,title,description}) {
  return (
    <div className="feature">
      <div className="feature-title mb-3">
        <i className={icon}></i>
        <span className="fs-5 fw-semibold d-block mt-2">{title}</span>
      </div>
      <div className="feature-description">
        <p className="lead fw-medium">{description}</p>
      </div>
    </div>
  )
}

export default Feature
