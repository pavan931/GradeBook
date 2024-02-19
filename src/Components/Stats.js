import React,  { useState} from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend ,ResponsiveContainer} from 'recharts';



const Stats = ({students}) => {
  const [toggle,setToggle]  = useState(false)


const totalFinalGrade = students.reduce((total, student) => total + student.finalGrade, 0);
const averageFinalGrade = totalFinalGrade / students.length;
const studentsInRange0_5 = students.filter(student => student.finalGrade >= 0 && student.finalGrade <= 5);
const studentsInRange5_6 = students.filter(student => student.finalGrade >5 && student.finalGrade <= 6);
const studentsInRange6_7 = students.filter(student => student.finalGrade >6 && student.finalGrade <= 7);
const studentsInRange7_8 = students.filter(student => student.finalGrade >7 && student.finalGrade <= 8);
const studentsInRangeMoreThan_8 = students.filter(student => student.finalGrade >8);

const grades = [
  { range: '0-5', count: students.filter(s => s.finalGrade >= 0 && s.finalGrade < 5).length },
  { range: '5-6', count: students.filter(s => s.finalGrade >= 5 && s.finalGrade < 6).length },
  { range: '6-7', count: students.filter(s => s.finalGrade >= 6 && s.finalGrade < 7).length },
  { range: '7-8', count: students.filter(s => s.finalGrade >= 7 && s.finalGrade < 8).length },
  { range: '8+', count: students.filter(s => s.finalGrade >= 8).length },
];



  return (
    <> <div className='my-9'> <span class=" text-2xl  text-black my-8 lg:mx-20 mx-6 md:text-4xl">Statistics</span>
     <span className={`mx-6 text-white mr-2 lg:px-6 px-2 lg:py-2  cursor-pointer ${!toggle ? " bg-blue-500 hover:bg-blue-800" : "hover:bg-red-800 bg-red-500"}`} onClick={()=>setToggle(!toggle)} >{ !toggle ?<>Show Statistics</>  : <>Hide Statistics</> }</span>
       </div>

      {toggle && (<div>
       
        <div class="flex flex-col md:flex-row h-full lg:mx-20 mx-3">
  <div class="w-full md:w-2/5 h-full">

  <table className="w-full border-collapse ">
      <thead>
        <tr className="bg-gray-200 text-gray-700">
          <th className="text-left py-2 px-4">Name</th>
          <th className="text-left py-2 px-4">Score</th>
        </tr>
      </thead>
      <tbody>

         <tr  className="border-b hover:bg-gray-150" >
            <td className="py-2 px-4"> All Students</td>
            <td className="py-2 px-4">{students.length}</td>
         </tr>
         <tr  className="border-b hover:bg-gray-100" >
            <td className="py-2 px-4"> Average of All</td>
            <td className="py-2 px-4">{averageFinalGrade.toFixed(2)}</td>
         </tr>
         <tr  className="border-b hover:bg-gray-100" >
            <td className="py-2 px-4"> Max of All</td>
            <td className="py-2 px-4">{Math.max(...students.map(student => student.finalGrade)).toFixed(2)}</td>
         </tr>
           <tr  className="border-b hover:bg-gray-100" >
            <td className="py-2 px-4"> Min of All</td>
            <td className="py-2 px-4">{Math.min(...students.map(student => student.finalGrade)).toFixed(2)}</td>
         </tr>
         <tr  className="border-b hover:bg-gray-100" >
            <td className="py-2 px-4"> Final Grade 0-5 </td>
            <td className="py-2 px-4">{studentsInRange0_5.length}</td>
         </tr>
         <tr  className="border-b hover:bg-gray-100" >
            <td className="py-2 px-4">Final Grade 5-6</td>
            <td className="py-2 px-4">{studentsInRange5_6.length}</td>
         </tr>
         <tr  className="border-b hover:bg-gray-100" >
            <td className="py-2 px-4"> Final Grade 6-7</td>
            <td className="py-2 px-4">{studentsInRange6_7.length}</td>
         </tr>
         <tr  className="border-b hover:bg-gray-100" >
            <td className="py-2 px-4"> Final Grade 7-8</td>
            <td className="py-2 px-4">{studentsInRange7_8.length}</td>
         </tr>
         <tr  className="border-b hover:bg-gray-100" >
            <td className="py-2 px-4"> Final Grade more than 8</td>
            <td className="py-2 px-4">{studentsInRangeMoreThan_8.length}</td>
         </tr>
       

      </tbody>
      </table>
  </div>
  <div class="w-full md:w-3/5 h-full">
 
  <div className="bg-white py-4 lg:pr-4 pr-6 m-5 rounded-full shadow-md ">
        <ResponsiveContainer className="mx-auto" width="90%" height={300}>
        <BarChart
      width={500}
      height={300}
      data={grades}
      margin={{ top: 10, right: 20, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="range" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
        </ResponsiveContainer>
      </div>

  </div>
</div>




      </div>)}


      <footer className="mt-16 bg-blue-700 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg font-bold">Thanks for visiting!</p>
        <p className="mt-2 mb-4">Created by Pavan Das</p>
        <p className="text-sm">Designed with love using React</p>
      </div>
    </footer>
  

    </>
    

  )
}

export default Stats