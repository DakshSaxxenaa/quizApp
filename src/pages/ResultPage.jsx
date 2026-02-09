import React, { useEffect } from 'react'
import scoreFeedback from '../utils/feedbacks';
import { useNavigate } from 'react-router-dom';

const ResultPage = () => {
    const studentData = JSON.parse(localStorage.getItem("studentData"));
    const quizScore = JSON.parse(localStorage.getItem("quizScore"));
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "QCG IITR - Results";
        if (!studentData || !quizScore) {
            navigate("/");
        }
    }, []);
    
    if (!studentData) return null;

    const percentage = quizScore ? Math.round((quizScore.score / quizScore.total) * 100) : 0;

  return (
    <div className="min-h-screen bg-gray-950 pt-20 sm:pt-24 md:pt-28 pb-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            Thank You!
          </h1>
          <p className="text-sm sm:text-base text-[#c434b8]">
            Your submission has been received
          </p>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-800 shadow-xl mb-4 sm:mb-5">
          <div className="text-center mb-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full bg-[#c434b8]/20 flex items-center justify-center">
              <span className="text-3xl sm:text-4xl font-bold text-[#c434b8]">{percentage}%</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base">Your Score</p>
            <p className="text-2xl sm:text-3xl font-bold text-white mt-1">
              {quizScore?.score}<span className="text-[#c434b8]">/{quizScore?.total}</span>
            </p>
          </div>

          <div className="mb-6">
            {quizScore?.score >= 7 ? (
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-3 sm:p-4">
                <p className="text-center text-green-400 text-sm sm:text-base">{scoreFeedback[2]}</p>
              </div>
            ) : quizScore?.score >= 4 ? (
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-3 sm:p-4">
                <p className="text-center text-yellow-400 text-sm sm:text-base">{scoreFeedback[1]}</p>
              </div>
            ) : (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 sm:p-4">
                <p className="text-center text-red-400 text-sm sm:text-base">{scoreFeedback[0]}</p>
              </div>
            )}
          </div>

          <div className="border-t border-gray-800 pt-5">
            <h3 className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-3">Applicant Details</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm sm:text-base">Name</span>
                <span className="text-white text-sm sm:text-base font-medium">{studentData.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm sm:text-base">Branch</span>
                <span className="text-white text-sm sm:text-base font-medium">{studentData.branch}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm sm:text-base">Email</span>
                <span className="text-white text-sm sm:text-base font-medium truncate ml-4">{studentData.email}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm sm:text-base">Domain</span>
                <span className="text-[#c434b8] text-sm sm:text-base font-medium uppercase">{studentData.domain}</span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate("/")}
          className="w-full bg-linear-to-r from-[#c434b8] to-[#8b2fc9] text-white font-semibold py-3 sm:py-3.5 rounded-xl hover:from-[#a82a9a] hover:to-[#7526a8] transition-all duration-200 cursor-pointer active:scale-[0.98]"
        >
          Back to Home
        </button>

        <p className="text-center text-gray-500 text-xs sm:text-sm mt-4 sm:mt-6">
          We'll contact you via email within 3-5 days
        </p>
      </div>
    </div>
  )
}

export default ResultPage