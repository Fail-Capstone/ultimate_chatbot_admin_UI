import React, { useState } from "react";

const QuestionItem = (props) => {
    const [isSelect, setIsSelect] = useState(false);
    return (
        <div className={isSelect ? "QuestionItem" : "Question"}>
            <div className="question">{props.question.question}</div>
            <div className="tag">{props.question.tag}</div>
        </div>
    );
};

export default QuestionItem;
