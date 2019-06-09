import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// importing the image
import Img from '../img/23361261_1537270353023124_1583967200_n.jpg';

class Aside extends Component {
    render() {
        return (
                <aside>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="imgContainer profileImage">
                                    <img src={Img} className="img-fluid" alt="profile" />
                                </div>
                                <div className="bottomSection">
                                    <div className="wrapper p-3">
                                        <div className="name">
                                            Johnny Bravo
                                        </div>
                                        <div className="socialLinks">
                                            <ul className="noBullets d-flex justify-content-center">
                                                <li>
                                                    <Link to="#" className="nav-link">
                                                        <i className="fab fa-facebook-f icon"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="nav-link">
                                                        <i className="fab fa-instagram icon"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="nav-link">
                                                        <i className="fab fa-linkedin-in icon"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="nav-link">
                                                        <i className="fab fa-stack-overflow icon"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="nav-link">
                                                        <i className="fab fa-github icon"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="email">
                                            <Link to="#" className="nav-link">
                                                <i className="fas fa-envelope mr-2"></i>underscoreplk@gmail.com
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
        )
    }
}

export default Aside;
