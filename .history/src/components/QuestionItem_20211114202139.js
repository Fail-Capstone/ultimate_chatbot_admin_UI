import React, { useState } from "react";

const QuestionItem = (props) => {
    const [isSelect, setIsSelect] = useState(false);
    return (
        <div className={isSelect ? "question-item selected" : "question-item"}>
            <div className="w-full ">
                <div className="tag">{props.question.tag}</div>
            </div>
            <div className="w-full">
                <div className="question">{props.question.question}</div>
            </div>
        </div>
    );
};

export default QuestionItem;
