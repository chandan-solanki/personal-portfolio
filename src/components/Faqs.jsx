import { useState } from "react";

const questionsApi = [
  {
    id: 1,
    question: "What do we do ?",
    ans: "We focus on producing visually stunning short-form videos designed specifically for your brand which helps you captivate your audience and achieve your goals.",
  },
  {
    id: 2,
    question: "Why short-form videos ?",
    ans: "Short-form videos are the fastest and most effective way to capture attention in today's fast-paced digital world. They're an excellent medium for showcasing expertise, convey your message and forge profound connections with your audience.",
  },
  {
    id: 3,
    question: "What choose us?",
    ans: "We at SyncwaveMedia, create short-form videos that break the scroll barrier. With our deep understanding of audience behavior, expertise in crafting impactful content paired with our personalized approach and dedication to your success, we're your ideal partner to bring your vision to life.",
  },
  {
    id: 4,
    question: "What do we do ?",
    ans: "While the convenience of an in-house video editor may seem tempting, the hidden costs of training and aligning him with your brand's values can drain your most valuable asset 'TIME'. Choosing us unlocks unparalleled advantages such as: tailored short-form video production, access to a diverse team of experts, streamlined workflow, elevated content quality and amplified impact.",
  },
];

const Faqs = () => {
  const [questions, setQuestions] = useState(questionsApi);

  const handleClick = (e) => {
    // console.log(e.currentTarget.parentElement.parentElement);
    const questionParent = e.currentTarget.parentElement.parentElement;
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

    if (e.currentTarget.classList.contains("active-ans")) {
      e.currentTarget.classList.remove("active-ans");
    } else {
      e.currentTarget.classList.add("active-ans");
    }
  };

  return (
    <div className="faqs-container">
      <h1 className="title">FAQs</h1>
      {questions.map((ques) => {
        return (
          <div key={ques.id} className="questions">
            <div className="question-title">
              <span>{ques.question}</span>
              <span onClick={handleClick} className="close-ques-btn">
                &#65291;
              </span>
            </div>
            <div className="ans">{ques.ans}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Faqs;
