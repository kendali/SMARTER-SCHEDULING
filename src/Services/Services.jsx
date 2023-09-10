import Service from './Service'
import './Services.css'
function Services() {
  return (
    <div className="services mt-5 py-5 bg-main">
      <div className="services-header">
        <div className="text text-center w-50 m-auto">
            <h3 className="display-3 fw-medium text-light">GET MORE VALUE</h3>
            <p className="lead text-light">
                We are a team of professionals who are passionate about providing the best services to our customers.
            </p>
        </div>
      </div>
      <div className="services-body container py-4 d-flex flex-column flex-lg-row justify-content-between gap-4 align-items-center ">
        <Service icon='fa-solid fa-chart-pie text-danger fs-1' title='Agenda Fluid' />
        <Service icon='fa-solid fa-chart-line text-success fs-1' title='Tell what need' />
        <Service icon='fa-solid fa-chart-simple text-dark fs-1' title='Rebalances week' />
      </div>
    </div>
  )
}

export default Services
