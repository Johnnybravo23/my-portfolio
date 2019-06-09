import React, { Component } from 'react';

class Side extends Component {
    render() {
        return (
            <main>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 px-0">
                            <div className="timeline pl-5 pr-3 py-4">
                                <div className="block">
                                    <div className="heading">
                                        About
                                    </div>
                                    <div className="subHeading">
                                        2014
                                    </div>
                                    <p className="text-justify">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                                <div className="block">
                                    <div className="heading">
                                        education
                                    </div>
                                    <p className="text-justify">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                                <div className="block">
                                    <div className="heading">
                                        Skills
                                    </div>
                                    <div className="skillBar">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="circularProgress" data-progress="90%">
                                                    <div className="icon">
                                                        <i className="devicons devicons-html5"></i>
                                                    </div>
                                                </div>
                                                <div className="skill">HTML</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="heading">
                                        About
                                    </div>
                                    <p className="text-justify">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Side;