import React from "react";

export default function Forms(){
    return(
        <div className="row mt-3">
            { false &&
              <div className="container-fluid">
                <div className="alert alert-warning">No Forms :(</div>
              </div> }
              <div className="col-lg-3 col-md-6 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">EI Form</h5>
                    <p className="card-text">form description</p>
                    <button
                      onClick={() => {}}
                      className="btn btn-outline-primary">Access Form</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Clinic Form</h5>
                    <p className="card-text">form description</p>
                    <button
                      onClick={() => {}}
                      className="btn btn-outline-primary">Access Form</button>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-3 col-md-6 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Chat 3</h5>
                    <p className="card-text">Some Chat 3 Description</p>
                    <button
                      onClick={() => {}}
                      className="btn btn-outline-primary">Join Chat</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Chat 4</h5>
                    <p className="card-text">Some Chat 4 Description</p>
                    <button
                      onClick={() => {}}
                      className="btn btn-outline-primary">Join Chat</button>
                  </div>
                </div>
              </div> */}
            </div>
    )
}