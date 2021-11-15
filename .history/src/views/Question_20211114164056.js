import React, { useState, useEffect } from "react";
import QuestionItem from "components/QuestionItem";
import axios from "axios";
import { apiUrl } from "variables.js";

const Question = () => {
    const [questions, setQuestions] = useState([]);
    const [selectedQuestion, setSelectedQuestion] = useState([]);
    useEffect(() => {
        const getQuestion = async () => {
            try {
                const response = await axios.get(`${apiUrl}/questions`);
                setQuestions(response.data.questions);
            } catch (error) {
                console.log(error);
            }
        };
        getQuestion();
    }, []);
    const handleQuestionClick = (id) => {
        setSelectedQuestion(...selectedQuestion, id);
        console.log(selectedQuestion)
    };
    return (
        <>
            <div className="flex justify-end mb-[15px]">
                <button className="border-[1px] border-solid rounded-[3px] mr-4 px-[20px] py-[10px] bg-[#fff] hover:bg-[#282c31] hover:text-white">
                    Load
                </button>
                <button className="border-[1px] border-solid rounded-[3px] mr-4 px-[20px] py-[10px] bg-[#fff] hover:bg-[#282c31] hover:text-white">
                    Add patterns
                </button>
            </div>
            <div className="flex h-full">
                <div className="flex-1 flex">
                    <div className="bg-white flex-1 rounded-[5px] p-[10px]">
                        {questions.map((question, index) => (
                            <QuestionItem key={index} question={question}/>
                        ))}
                    </div>
                </div>
                <div className="flex-1 ml-[20px] flex flex-col">
                    <span className="text-gray-700">Select tag</span>
                    <select
                        className="form-multiselect block w-full mt-1 flex-1"
                        multiple
                    >
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                        <option>Option 5</option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default Question;
