// FAQItem.js
import  { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 mx-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full bg-green p-4 rounded shadow focus:outline-none"
      >
        <div className=" text-orange-800 text-start">{question}</div>
        <div className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform text-emerald-500`}>
          &#9660;
        </div>
      </button>
      {isOpen && <div className="mt-2 pl-4 text-gray-500">{answer}</div>}
    </div>
  );
};

export default FAQItem;
