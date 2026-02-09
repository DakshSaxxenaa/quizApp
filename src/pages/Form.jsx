import React, { useEffect, useRef, useState } from "react";
    import { useNavigate } from "react-router-dom";

const Form = () => {
  const name = useRef();
  const enrollment = useRef();
  const year = useRef();
  const branch = useRef();
  const contact = useRef();
  const email = useRef();
  const domain = useRef();
  const reason = useRef();
  const navigate = useNavigate();
  const [focused, setFocused] = useState("");

  const inputClasses =
    "w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 outline-none transition-all duration-200 focus:border-[#c434b8] focus:ring-1 focus:ring-[#c434b8]/50 hover:border-gray-600";

  const labelClasses = "text-sm text-gray-300 mb-1.5 block";

  useEffect(()=>{
    document.title = "QCG IITR - Join Us"
  }, [])

  const handleSubmit = () => {

    if(name.current.value === "" || enrollment.current.value === "" || year.current.value === "" || branch.current.value === "" || contact.current.value === "" || email.current.value === "" || domain.current.value === "" || reason.current.value === ""){
      alert("Please fill all the fields");
      return;
    }

    const studentData = {
      name: name.current.value,
      enrollment: enrollment.current.value,
      year: year.current.value,
      branch: branch.current.value,
      contact: contact.current.value,
      email: email.current.value,
      domain: domain.current.value,
      reason: reason.current.value,
    };

    localStorage.setItem("studentData", JSON.stringify(studentData));
    navigate("/quiz");
  };

  return (
    <div className="min-h-screen bg-gray-950 pt-20 sm:pt-24 md:pt-28 pb-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            Join QCG
          </h1>
          <p className="text-sm sm:text-base text-[#c434b8]">
            Fill out the form to apply
          </p>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-5 sm:p-7 md:p-8 border border-gray-800 shadow-xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col gap-4 sm:gap-5"
          >
            <div>
              <label className={labelClasses}>Full Name</label>
              <input
                ref={name}
                type="text"
                placeholder="Enter your name"
                className={inputClasses}
                required
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused("")}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className={labelClasses}>Enrollment No.</label>
                <input
                  ref={enrollment}
                  type="text"
                  placeholder="e.g. 22115XXX"
                  className={inputClasses}
                  required
                />
              </div>

              <div>
                <label className={labelClasses}>Contact Number</label>
                <input
                  ref={contact}
                  type="tel"
                  placeholder="10-digit number"
                  className={inputClasses}
                  required
                />
              </div>
            </div>

            <div>
              <label className={labelClasses}>Email Address</label>
              <input
                ref={email}
                type="email"
                placeholder="your.email@iitr.ac.in"
                className={inputClasses}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className={labelClasses}>Branch/Department</label>
                <input
                  ref={branch}
                  type="text"
                  placeholder="e.g. CSE, ECE"
                  className={inputClasses}
                  required
                />
              </div>

              <div>
                <label className={labelClasses}>Year of Study</label>
                <select
                  ref={year}
                  className={`${inputClasses} cursor-pointer`}
                  required
                >
                  <option value="" disabled selected>
                    Select year
                  </option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                  <option value="5">5th Year</option>
                </select>
              </div>
            </div>

            <div>
              <label className={labelClasses}>Preferred Domain</label>
              <select
                ref={domain}
                className={`${inputClasses} cursor-pointer`}
                required
              >
                <option value="" disabled selected>
                  Select Domain
                </option>
                <option value="Quantum Computing">Quantum Computing</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="Cryptography">Cryptography</option>
                <option value="Algorithms">Algorithms</option>
                <option value="Operating Systems">Operating Systems</option>
              </select>
            </div>

            <div>
              <label className={labelClasses}>
                Why do you want to join QCG?
              </label>
              <textarea
                ref={reason}
                placeholder="Tell us about your interest in quantum computing..."
                className={`${inputClasses} resize-none`}
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              onClick={() => {
                handleSubmit();
              }}
              className="w-full mt-2 bg-linear-to-r from-[#c434b8] to-[#8b2fc9] text-white font-semibold py-3 sm:py-3.5 rounded-xl hover:from-[#a82a9a] hover:to-[#7526a8] transition-all duration-200 cursor-pointer active:scale-[0.98]"
            >
              Attempt Quiz
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Form;
