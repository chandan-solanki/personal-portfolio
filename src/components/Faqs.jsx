import { useState } from "react";
import faqIcon from "../assets/faqicon.svg";

const questionsApi = [
  {
    id: 1,
    question: "How does the pricing work?",
    ans: "Pricing is based on the length, style, and number of videos you need. DM me on X (Twitter) for a custom quote or book a call to discuss your project.",
  },
  {
    id: 2,
    question: "Why choose me?",
    ans: "With a deep understanding of audience behavior, expertise in crafting impactful content, and a personalized approach dedicated to your success, I’m the ideal partner to bring your vision to life.",
  },
  {
    id: 3,
    question: "What do I need to provide?",
    ans: "Just share your raw footage and give me some direction on how you’d like your video edited—then leave the rest to me",
  },
  {
    id: 4,
    question: "What does your process look like?",
    ans: "It’s simple! We start with a call to discuss your needs, and I get to work right away.",
  },
];

const Faqs = () => {
  const [questions, setQuestions] = useState(questionsApi);

  const handleClickQuestions = (e) => {
    console.log(e.currentTarget);
    const questionParent = e.currentTarget;
    let ansHeight = questionParent.childNodes[1].offsetHeight;
    console.log({ ansHeight });

    if (questionParent.classList.contains("active")) {
      questionParent.classList.remove("active");
      questionParent.style.height = "auto";
    } else {
      questionParent.classList.add("active");
      questionParent.style.height = `${
        questionParent.offsetHeight + ansHeight
      }px`;
    }
  };

  return (
    <div className="faqs-container">
      <div className="faq-title title">
        <div className="faq-icon">
          <img src={faqIcon} alt="faq-icon" />
        </div>{" "}
        <h1 className="title">FAQs</h1>
      </div>
      {questions.map((ques) => {
        return (
          <div
            onClick={handleClickQuestions}
            key={ques.id}
            className="questions"
          >
            <div className="question-title">
              <span>{ques.question}</span>
              <span className="close-ques-btn">&#65291;</span>
            </div>
            <div className="ans">{ques.ans}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Faqs;
