
import React,{useState} from "react";
import Stats from "./Stats";

const StudentTable = ({ students }) => {
    const [filterOption, setFilterOption] = useState("all");
    const [sortOption, setSortOption] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    // const [studentIndexForDetails,setStudentIndexForDetails] = useState(0)
    const [detalsbar , setDetailsbar] = useState({})

    const toggleBox = () => {
      setIsOpen(!isOpen);
    };
      
      const calculateFinalGrade = (examGrade, ratingGrade) => {
        return 0.6 * examGrade + 0.4 * ratingGrade;
      }
      
      const determineStatus = (finalGrade) => {
        return finalGrade >= 4 ? 'passed' : 'failed';
      }
      
      const studentData = students.map(student => {
        const { examGrade, ratingGrade } = student;
        const finalGrade = calculateFinalGrade(examGrade, ratingGrade);
        const status = determineStatus(finalGrade);
        return {
          ...student,
          finalGrade,
          status
        }
      });


    const filteredStudents = studentData.filter((student) => {
        if (filterOption === "all") {
          
          return true;
        } else if (filterOption === "passed") {
          return student.finalGrade >= 4;
        } else if (filterOption === "failed") {
          return student.finalGrade < 4;
        }else {
          return  student.name.toLowerCase().includes(searchValue.toLowerCase())

        }
        
      });

    var sortedStudents = filteredStudents.sort((a, b) => {
        if (sortOption === "asc") {
          return (a.name > b.name ? 1 : -1)
        }
        else if (sortOption==="des"){
            return (a.name < b.name ? 1 : -1)
        }

        return true

      });

      function changeFilterOption (Option){

        if (Option === "asc"){
            setSortOption(Option)
            return
        }else if (Option === "des"){
            setSortOption(Option)
            return
        }

        setFilterOption(Option)

      }

      function individualStudentDetails(x){
        // setStudentIndexForDetails(x.id - 1)

        setDetailsbar(x)
        


        setIsOpen(true)

        // console.log(x)
       
       

      }
      
    
     
  return (
    <>
  <div className="my-5">

        <span className=" text-white mr-2 lg:px-6 px-2 lg:py-2 bg-blue-500 hover:bg-blue-800 cursor-pointer ml-6" onClick={()=>changeFilterOption('all')}>All</span>
        <span className=" text-white mr-2 lg:px-6 px-2 lg:py-2 bg-blue-500 hover:bg-blue-800 cursor-pointer" onClick={()=>changeFilterOption('passed')}>Passed</span>
        <span className=" text-white mr-2 lg:px-6 px-2 lg:py-2 bg-blue-500 hover:bg-blue-800 cursor-pointer" onClick={()=>changeFilterOption('failed')}>Failed</span>
        <span className=" text-white mr-2 lg:px-6 px-2 lg:py-2 bg-blue-500 hover:bg-blue-800 cursor-pointer" onClick={()=>changeFilterOption('asc')}>A-Z</span>
        <span className=" text-white mr-2 lg:px-6 px-2 lg:py-2 bg-blue-500 hover:bg-blue-800 cursor-pointer" onClick={()=>changeFilterOption('des')}>Z-A</span>
       
    
           <input
          type="text"
          placeholder="Search by name"
          className=" border border-gray-300 my-3 lg:my-0 lg:p-2 rounded-md lg:ml-0 ml-6 "
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
         <span className=" text-white ml-2 lg:px-6 px-2 lg:py-2  bg-blue-500 hover:bg-blue-800 cursor-pointer" onClick={()=>changeFilterOption(searchValue)}>Search</span>
      
      
        </div>
    <div className="overflow-x-auto">
      

       
      
        {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg p-9 m-4 max-w-md mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{detalsbar.name}</h2>
              <button
                className="text-gray-500 hover:text-gray-600"
                onClick={toggleBox}
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Close</title>
                  <path
                    d="M14.348 5.652c-.391-.39-1.023-.39-1.414 0L10 8.586 6.066 4.652c-.391-.39-1.023-.39-1.414 0-.39.391-.39 1.023 0 1.414L8.586 10l-3.934 3.934c-.39.391-.39 1.023 0 1.414.391.39 1.023.39 1.414 0L10 11.414l3.934 3.934c.391.39 1.023.39 1.414 0 .39-.391.39-1.023 0-1.414L11.414 10l3.934-3.934c.39-.391.39-1.023 0-1.414z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="mb-4">
              <p>
                <span className="font-bold">ID: </span>
                {detalsbar.id}
              </p>
              <p>
                <span className="font-bold">Ticket Number: </span>
                {detalsbar.ticketNumber}
              </p>
              <p>
                <span className="font-bold">Ticket Topic: </span>
                {detalsbar.ticketTopic}
              </p>
              <p>
                <span className="font-bold">Exam Grade: </span>
                {detalsbar.examGrade}
              </p>
              <p>
                <span className="font-bold">Rating Grade: </span>
                {detalsbar.ratingGrade}
              </p>
              <p>
                <span className="font-bold">Final Grade: </span>
                {detalsbar.finalGrade}
              </p>
              <p>
                <span className="font-bold">Status: </span>
                {detalsbar.status}
              </p>
              <p>
                <span className="font-bold">comments: </span>
                {detalsbar.comments}
              </p>
            </div>
          </div>
        </div>
      )}



      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Ticket Number</th>
            <th className="py-3 px-6 text-center">Exam Grade</th>
            <th className="py-3 px-6 text-center">Rating Grade</th>
            <th className="py-3 px-6 text-center">Final Grade</th>
            <th className="py-3 px-6 text-center">Status</th>
            <th className="py-3 px-6 text-center">Details</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {sortedStudents.map((student) => (
            <tr
              key={student.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {student.name}
              </td>
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {student.ticketNumber}
              </td>
              <td className="py-3 px-6 text-center whitespace-nowrap">
                {student.examGrade}
              </td>
              <td className="py-3 px-6 text-center whitespace-nowrap">
                {student.ratingGrade}
              </td>
              <td className="py-3 px-6 text-center whitespace-nowrap">
                {student.finalGrade.toFixed(2)}
              </td>
              <td className="py-3 px-6 text-center whitespace-nowrap">
                {student.status}
              </td>
              <td className="py-3 px-6 text-center whitespace-nowrap">
              <span className=" text-white mr-2 px-6 py-2 bg-blue-500 hover:bg-blue-800 cursor-pointer" onClick={()=>individualStudentDetails(student)} >Details</span>
       
              </td>
            </tr>
          ))}
        </tbody>
      </table>
   
      
    </div>
    <Stats students={filteredStudents} />
    </>
  );
};

export default StudentTable;
