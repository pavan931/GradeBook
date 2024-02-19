
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const exams = [

  {
    title: 'React.JS',
    date: '2023-05-06',
    professor: 'Sandeep Kaur',
    college: 'Lovely Professional University',
    department: 'Computer Science',
    semester: 'Spring 2023',
    group: 'A'
  },
  {
    title: 'React.JS',
    date: '2023-05-06',
    professor: 'Sandeep Kaur',
    college: 'Lovely Professional University',
    department: 'Computer Science',
    semester: 'Spring 2023',
    group: 'A'
  },
  {
    title: 'React.JS',
    date: '2023-05-06',
    professor: 'Sandeep Kaur',
    college: 'Lovely Professional University',
    department: 'Computer Science',
    semester: 'Spring 2023',
    group: 'A'
  }
];

const Gradebook = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: <button className="absolute left-0 top-1/2 transform -translate-y-1/2 focus:outline-none"><i className="fas fa-chevron-left text-white text-3xl"></i></button>,
    nextArrow: <button className="absolute right-0 top-1/2 transform -translate-y-1/2 focus:outline-none"><i className="fas fa-chevron-right text-white text-3xl"></i></button>,
    appendDots: dots => (
      <ul className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
        {dots}
      </ul>
    ),  
    customPaging: i => (
      <button className="mx-2 focus:outline-none">
        <i className="fas fa-circle text-gray-400 text-xs"></i>
      </button>
    ),
  };

  return (
    <div className="bg-gray-50 py-10">
        <header className="bg-blue-500 mb-3 py-4">
        <h1 className="text-white text-3xl text-center">Gradebook</h1>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="sm:text-center ">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Gradebook</h1>
        </div> */}
        <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <Slider {...settings}>
            {exams.map((exam, index) => (
              <div key={index} className="px-6 py-4">
                <div className="text-center">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">{exam.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{exam.date} | {exam.professor} | {exam.college} | {exam.department} | {exam.semester} | {exam.group}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Gradebook;
