import React, { useState } from 'react';


export default function SyllabusContent() {
  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div id="content2" className="text-gray-800 mt-5">
      <h2 className="text-2xl font-bold ">What You’ll Learn</h2>
      {/* <img src={Line} alt="separator" className='w-14 my-2'/>
      <div className="mb-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <img src={greenicon} alt="check" />
            Build strong understanding of UX testing workflows
          </li>
          <li className="flex items-start gap-2">
            <img src={greenicon} alt="check" />
            Analyze user behavior using practical techniques
          </li>
          <li className="flex items-start gap-2">
            <img src={greenicon} alt="check" />
            Explore legal frameworks in user-centered design
          </li>
          <li className="flex items-start gap-2">
            <img src={greenicon} alt="check" />
            Execute accessibility-driven UI audits
          </li>
        </ul>
      </div> */}

      <p className="text-gray-600 mb-6 text-[14px] line-clamp-1">
        Throughout this course, you’ll gain actionable skills in usability evaluation,
        documentation techniques, and inclusive design backed by expert advice.
      </p>

      <h3 className="text-xl font-semibold mb-3">Course Content</h3>

      <div className="divide-y border rounded overflow-hidden">
        {/* Accordion Item */}
        {[
          {
            title: "Introduction",
            duration: "2 Lessons - 3min",
            lessons: ["Welcome to the Course", "What to Expect"],
          },
          {
            title: "Creating a Syllabus",
            duration: "6 Lessons - 57min",
            lessons: ["Structuring Modules", "Organizing Topics"],
          },
        ].map((section, index) => (
          <div key={index}>
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 hover:bg-gray-100 text-left text-base font-medium"
            >
              <span>
                {section.title}
                <span className="text-sm text-gray-500 ml-2">| {section.duration}</span>
              </span>
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="bg-white px-6 py-4 space-y-3">
                {section.lessons.map((lesson, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      {/* <img src={blackbook} alt="lesson" className="w-5 h-5" /> */}
                      <span className="text-primaryBlue underline cursor-pointer">{lesson}</span>
                    </div>
                    <span className="text-sm text-gray-500">Preview 00:59</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
