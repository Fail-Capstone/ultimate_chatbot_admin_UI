import React from "react";

const QuestionItem = (props) => {
    return (
        <div className="question-item">
            <div className="question">{props.question.question}</div>
            <div className="tag">{props.question.tag}</div>
        </div>
    );
};

export default QuestionItem;
