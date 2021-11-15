import React, { useState } from "react";

const QuestionItem = (props) => {
    const [isSelect, setIsSelect] = useState(false);
    return (
        <button className={isSelect ? "question-item selected" : "question-item"}>
            <div className="w-full">
                <div className="tag">{props.question.tag}</div>
            </div>
            <div className="w-full mt-[-8px]">
                <div className="question">{props.question.question}</div>
            </div>
        </button>
    );
};

export default QuestionItem;
