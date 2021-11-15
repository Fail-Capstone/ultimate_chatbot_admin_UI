import React, { useState } from "react";

const QuestionItem = ({ question, handleQuestionClick }) => {
    const [isSelect, setIsSelect] = useState(false);
    const selectClick = () => {
        setIsSelect(!isSelect);
        // handleQuestionClick(question._id);
    };
    return (
        <div
            className={isSelect ? "question-item selected" : "question-item"}
            onClick={selectClick}
        >
            <div className="w-full">
                <div className="tag">{question.tag}</div>
            </div>
            <div className="w-full mt-[-8px]">
                <div className="question">{question.question}</div>
            </div>
        </div>
    );
};

export default QuestionItem;
