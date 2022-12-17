import React from 'react'
import MentorList from './MentorList'
import { Link } from "react-router-dom"

function Mentor({ mentordata }) {


    return (

        <div className="card shadow mb-4">
            <div className="card-header py-3 d-sm-flex  justify-content-between mb-4">
                <h6 className="m-0 font-weight-bold text-primary">Mentors List</h6>
                <Link className="btn btn-outline-success btn-sm" to="/portal/student">Student List</Link>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Employe Id</th>
                                <th>Name</th>
                                <th>Subject</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mentordata.map((dt, index) => <MentorList key={index} mentordata={dt} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Mentor
