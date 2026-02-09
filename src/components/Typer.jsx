import React, { useState, useEffect } from 'react';

const Typewriter = ({ words = ["Computing", "Information", "Algorithms", "Communication", "Hardware", "Cryptography", "Machine Learning"] }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(150);
      } else {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum, words]);

  return (
    <span className="text-[#c434b8] ml-2">
      {text}
      <span className="cursor">|</span>
    </span>
  );
};

export default Typewriter;