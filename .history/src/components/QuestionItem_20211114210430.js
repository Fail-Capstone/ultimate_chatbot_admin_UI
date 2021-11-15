import React, { useState } from "react";

const QuestionItem = ({ question, handleQuestion }) => {
    const [isSelect, setIsSelect] = useState(false);
    const selectClick = () => {
        setIsSelect(!isSelect);
        handleQuestion(question._id);
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
