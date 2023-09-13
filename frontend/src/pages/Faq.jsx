import { useState } from "react";
import { faqs } from "~/static/data";
import { RxCross2 } from 'react-icons/rx'
import { FiChevronRight } from 'react-icons/fi'
const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);
  const toggleTab = (tab) => {
    // activeTab === tab : tức là ấn lại button liên tiếp
    activeTab === tab ? setActiveTab(0) : setActiveTab(tab);
  }
  return (
    <div className="w-11/12 mx-auto my-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ</h2>
      <div className="mx-auto space-y-4">
        {faqs.map(f => {
          return (
            <div key={f.id} className="border-b border-gray-200 pb-4 ">
              <button className="flex items-center justify-between w-full" onClick={() => toggleTab(f.id)} >
                <span className="text-lg font-medium text-gray-900">{f.question}</span>
                {activeTab === f.id ? <RxCross2 /> : <FiChevronRight />}
              </button>
              {activeTab === f.id && (
                <div className="mt-4">
                  <p className="text-base text-gray-500">{f.answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Faq;