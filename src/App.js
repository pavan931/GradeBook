import React from 'react'
import './App.css';
import Triel from "./Components/Triel"
import Stud from './Components/Stud';

const students = [
  // {
  //   id: 1,
  //   name: 'John Doe',
  //   ticketNumber: 12345,
  //   ticketTopic: 'React',
  //   examGrade: 8,
  //   ratingGrade: 7,
  //   comments: 'Good work!'
  // },
  // {
  //   id: 2,
  //   name: 'Jane Smith',
  //   ticketNumber: 67890,
  //   ticketTopic: 'Node.js',
  //   examGrade: 9,
  //   ratingGrade: 8,
  //   comments: 'Excellent job!'
  // },
  // {
  //   id: 3,
  //   name: 'Bob Johnson',
  //   ticketNumber: 24680,
  //   ticketTopic: 'JavaScript',
  //   examGrade: 6,
  //   ratingGrade: 9,
  //   comments: 'Needs improvement'
  // },
  // {
  //   id: 4,
  //   name: "Doe",
  //   ticketNumber: "ABC123",
  //   ticketTopic: "Web Development",
  //   examGrade: 3.5,
  //   ratingGrade: 2.7,
  //   comments: "Needs improvement", 
  // }
  
    {
      name: "John",
      id: 1,
      ticketNumber: 12345,
      ticketTopic: "React",
      examGrade: 7,
      ratingGrade: 8,
      comments: "Good job!",
    },
    {
      name: "Emily",
      id: 2,
      ticketNumber: 67890,
      ticketTopic: "Node.js",
      examGrade: 2,
      ratingGrade: 2,
      comments: "Improve next time",
    },
    {
      name: "Sarah",
      id: 3,
      ticketNumber: 13579,
      ticketTopic: "Vue.js",
      examGrade: 2,
      ratingGrade: 4,
      comments: "Needs Improvement",
    },
    {
      name: "Michael",
      id: 4,
      ticketNumber: 24680,
      ticketTopic: "Angular",
      examGrade: 8,
      ratingGrade: 2,
      comments: "Great work!",
    },
    {
      name: "Alex",
      id: 5,
      ticketNumber: 54321,
      ticketTopic: "React Native",
      examGrade: 7,
      ratingGrade: 6,
      comments: "Well done!",
    },
    {
      name: "Grace",
      id: 6,
      ticketNumber: 97531,
      ticketTopic: "Express.js",
      examGrade: 3,
      ratingGrade: 4,
      comments: "Not upto the Mark",
    },
    {
      name: "David",
      id: 7,
      ticketNumber: 80246,
      ticketTopic: "MongoDB",
      examGrade: 6,
      ratingGrade: 8,
      comments: "Good job!",
    },
    {
      name: "Sophie",
      id: 8,
      ticketNumber: 68024,
      ticketTopic: "Node.js",
      examGrade: 9,
      ratingGrade: 9,
      comments: "Excellent work!",
    },
    {
      name: "Ryan",
      id: 9,
      ticketNumber: 24601,
      ticketTopic: "React",
      examGrade: 0,
      ratingGrade: 0,
      comments: "Improve next time!",
    },
    {
      name: "Olivia",
      id: 10,
      ticketNumber: 13579,
      ticketTopic: "Vue.js",
      examGrade: 4,
      ratingGrade: 3,
      comments: "Not Good",
    },
  
  
  
];


function App() {
  
  return (
   <>

   <Triel/>

   <Stud students={students}/>
   
   </>
  );
}

export default App;
