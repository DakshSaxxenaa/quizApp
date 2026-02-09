import React, { useState } from 'react'

const Question = ({ ques, index, score, setScore, markAttempted }) => {
  const [selected, setSelected] = useState(null)
  const [hasScored, setHasScored] = useState(false)

  const handleSelect = (i, opt) => {
    if (selected === null) {
      markAttempted(index)
    }

    const wasCorrect = selected !== null && ques.options[selected] === ques.correctAnswer
    const isCorrect = opt === ques.correctAnswer

    if (wasCorrect && !isCorrect && hasScored) {
      setScore(score - 1)
      setHasScored(false)
    } else if (isCorrect && !hasScored) {
      setScore(score + 1)
      setHasScored(true)
    }

    setSelected(i)
  }

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-800 shadow-lg">
      <div className="flex gap-3 mb-4">
        <span className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-[#c434b8] rounded-lg flex items-center justify-center text-white font-semibold text-sm sm:text-base">
          {index + 1}
        </span>
        <p className="text-white text-sm sm:text-base md:text-lg font-medium leading-relaxed">
          {ques.question}
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-4">
        {ques.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i, opt)}
            className={`w-full text-left border rounded-lg px-4 py-3 text-white text-sm sm:text-base transition-all duration-200 cursor-pointer active:scale-[0.98] ${
              selected === i 
                ? 'bg-[#c434b8]/30 border-[#c434b8]' 
                : 'bg-gray-800/50 border-gray-700 hover:border-[#c434b8] hover:bg-gray-700/50'
            }`}
          >
            <span className={`mr-2 ${selected === i ? 'text-[#c434b8]' : 'text-gray-400'}`}>
              {String.fromCharCode(65 + i)}.
            </span>
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Question