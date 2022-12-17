import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Login from './components/Login/Login';
import Student from './components/Student/Student';
import Portal from "./components/Portal/Portal"
import { useState } from 'react';
import Mentor from './components/Teacher/Mentor';
import MentorView from './components/Teacher/MentorView';
import StudentView from './components/Student/StudentView';
import AdmissionForm from './components/Student/AdmissionForm';
import EditStudent from './components/Student/EditStudent';
import { UserProvider } from './components/Context/UserContext';

function App() {
  const [studentdata, setstudentData] = useState([
    {
      roll_no: 1,
      name: "Ranjani N",
      standard: 10,
      mother_name: "Roja",
      father_name: "Ravi",
      contact: "952654****",
      address: "chennai"
    },
    {
      roll_no: 10,
      name: "Nivetha S",
      standard: 5,
      mother_name: "Narmatha",
      father_name: "Nagaraj",
      contact: "985654****",
      address: "chennai"
    }
  ])
  const mentordata = [
    {
      employe_id: 1,
      name: "Meenatchi S",
      subject: "Tamil",
      qualification: "Tamil(literature)",
      experience: "10 years",
      salary: 30000,
      contact: "922634****",
      address: "chennai"
    },
    {
      employe_id: 2,
      name: "Nancy N",
      subject: "English",
      qualification: "English(literature)",
      experience: "3 years",
      salary: 30000,
      contact: "852654****",
      address: "chennai"
    },
    {
      employe_id: 3,
      name: "Sharmila P",
      subject: "Maths",
      qualification: "M.sc,B.Ed",
      experience: "8 years",
      salary: 40000,
      contact: "978654****",
      address: "chennai"
    },
    {
      employe_id: 4,
      name: "Saseendran S",
      subject: "science",
      qualification: "M.sc(Science)",
      experience: "2 years",
      salary: 35000,
      contact: "912654****",
      address: "chennai"
    },
    {
      employe_id: 5,
      name: "Santhini R",
      subject: "social",
      qualification: "M.sc(History)",
      experience: "1 year",
      salary: 28000,
      contact: "952824****",
      address: "chennai"
    }
  ]
  const [mentorVisible, setMentorVisible] = useState(false);
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<Login setMentorVisible={setMentorVisible} />} />
        <Route path="/portal" element={<Portal />}>
          <Route path='mentor' element={<Mentor mentordata={mentordata} />} />
          <Route path='mentorview/:id' element={<MentorView mentordata={mentordata} />} />
          <Route path="student" element={<Student studentdata={studentdata} setstudentData={setstudentData} mentorVisible={mentorVisible} />} />
          <Route path='studentview/:id' element={<StudentView studentdata={studentdata} />} />
          <Route path='admissionform' element={<AdmissionForm studentdata={studentdata} setstudentData={setstudentData} />} />
          <Route path='editstudent/:id' element={<EditStudent studentdata={studentdata} setstudentData={setstudentData} />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
