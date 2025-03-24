import RefreshIcon from './../../assets/refresh.svg'
import TruckIcon from './../../assets/truck.svg'
import { Link } from "react-router-dom";

export default function MainBanner() {
    return (
        <>
            <section style={{ backgroundImage: "url('images/banner-1.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="container-lg">
                    <div className="row">
                        <div className="col-lg-6 pt-5 mt-5">
                            <h2 className="display-1 ls-1 text-white">Get Best <span className="fw-bold text-danger">Deal</span> With <span className="fw-bold text-primary">Gada Electronics</span></h2>
                            <div className="d-flex gap-3">
                                <Link to={'/category'} className="btn btn-primary text-uppercase fs-6 rounded-pill px-4 py-3 mt-3">Start Shopping</Link>
                                <Link to={'/register'} className="btn btn-dark text-uppercase fs-6 rounded-pill px-4 py-3 mt-3">Join Now</Link>
                            </div>
                            <div className="row my-5">
                                <div className="col">
                                    <div className="row text-dark">
                                        <div className="col-auto"><p className="fs-1 fw-bold lh-sm mb-0 text-white">10k+</p></div>
                                        <div className="col"><p className="text-uppercase lh-sm mb-0 text-white">Product Varieties</p></div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row text-dark">
                                        <div className="col-auto"><p className="fs-1 fw-bold lh-sm mb-0 text-white">25k+</p></div>
                                        <div className="col"><p className="text-uppercase lh-sm mb-0 text-white">Happy Customers</p></div>
                                    </div>
                                </div>
                                <div className="col">
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-3 g-0 justify-content-center">
                        <div className="col">
                            <div className="card border-0 bg-primary rounded-0 p-4 text-light">
                                <div className="row">
                                    <div className="col-md-3 text-center ">
                                        <img src={RefreshIcon} alt="refresh" width={60} height={60} />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body p-0">
                                            <h5 className="text-light">100% genuine Product</h5>
                                            <p className="card-text">Your trust is Our <br></br>Pride.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col">
                            <div className="card border-0 bg-danger rounded-0 p-4 text-light">
                                <div className="row">
                                    <div className="col-md-3 text-center">
                                        <img src={TruckIcon} alt="delivery" width={60} height={60} />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body p-0">
                                            <h5 className="text-light">Free delivery</h5>
                                            <p className="card-text">We are Provide You hessal free Delivery Experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}