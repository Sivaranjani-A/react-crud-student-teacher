import React from 'react'
import Studentlist from './StudentList'
import { Link } from "react-router-dom"

function Student({ studentdata, setstudentData, mentorVisible }) {

    const DeleteStudent = (roll_no) => {
        const confirm = window.confirm("Do you want to delete?")
        console.log(roll_no)
        if (confirm) {
            setstudentData(studentdata.filter((item) => item.roll_no !== roll_no));
        }
    };

    return (
        <>
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-sm-flex  justify-content-between mb-4">
                    <h6 className="m-0 font-weight-bold text-primary">Students List</h6>
                    {mentorVisible ? <Link to="/portal/admissionform" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Admission Form</Link> : null}

                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Roll.No</th>
                                    <th>Name</th>
                                    <th>Standard</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentdata.map((dt, index) => <Studentlist key={index} studentdata={dt} mentorVisible={mentorVisible} DeleteStudent={DeleteStudent} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {mentorVisible ? <div className="d-sm-flex  justify-content-start" >
                <Link to="/portal/mentor" className="btn btn-sm btn-primary shadow-sm ">BACK</Link>
            </div> : null}
        </>
    )
}

export default Student
