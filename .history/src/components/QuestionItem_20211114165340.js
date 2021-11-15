import React, { useState } from "react";

const QuestionItem = (props) => {
    const [isSelect, setIsSelect] = useState(false);
    return (
        <div className={isSelect ? "question-item selected" : "question-item"}>
            <div className="inline-block w-full">
                <div className="question">{props.question.question}</div>
            </div>
            <div className="inline-block w-full">
                <div className="tag">{props.question.tag}</div>
            </div>
        </div>
    );
};

export default QuestionItem;
