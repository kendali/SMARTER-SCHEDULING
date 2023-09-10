import './Services.css'

function Service({icon,title}) {
  return (
    <div className='service py-5 px-2'>
      <div className="services-header text-center h-50">
        <i className={icon}></i>
      </div>
      <div className="services-body">
        <h4>{title}</h4>
      </div>
      <div className="services-footer">
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
        </p>
      </div>
    </div>
  )
}

export default Service
