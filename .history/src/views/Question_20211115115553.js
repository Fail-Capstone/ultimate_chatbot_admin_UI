import React, { useState, useEffect } from "react";
import QuestionItem from "components/QuestionItem";
import axios from "axios";
import { apiUrl } from "variables.js";

const Question = () => {
    const [questions, setQuestions] = useState([]);
    const [tags, setTags] = useState([]);
    const [selectedQuestion, setSelectedQuestion] = useState([]);
    const [selectedTag, setSelectedTag] = useState([]);
    const getQuestion = async () => {
        try {
            const response = await axios.get(`${apiUrl}/questions`);
            setQuestions(response.data.questions);
        } catch (error) {
            console.log(error);
        }
    };
    const getTag = async () => {
        try {
            const response = await axios.get(`${apiUrl}/intents/tags`);
            setTags(response.data.tags);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getQuestion();
        getTag();
        console.log(tags);
    }, []);
    const handleQuestionClick = (question) => {
        if (selectedQuestion.includes(question)) {
            setSelectedQuestion(
                selectedQuestion.filter((item) => item !== question)
            );
        } else {
            setSelectedQuestion([...selectedQuestion, question]);
        }
    };
    const handleTagChange = (e) => {
        setSelectedTag(e.target.value);
    };
    const handleAddPattern = async (pattern) => {
        const newPattern = {
            tag: selectedTag,
            pattern: selectedQuestion,
        };
        setSelectedQuestion([]);
        setSelectedTag("");
        try {
            const response = await axios.put(`${apiUrl}/intents/patterns`, newPattern)
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(selectedQuestion, selectedTag);
    return (
        <>
            <div className="flex justify-end mb-[15px]">
                <button
                    className="border-[1px] border-solid rounded-[3px] mr-4 px-[20px] py-[10px] bg-[#fff] hover:bg-[#282c31] hover:text-white"
                    onClick={getQuestion}
                >
                    Load
                </button>
                <button className="border-[1px] border-solid rounded-[3px] mr-4 px-[20px] py-[10px] bg-[#fff] hover:bg-[#282c31] hover:text-white" onClick={handleAddPattern}>
                    Add patterns
                </button>
            </div>
            <div className="flex h-full">
                <div className="flex-1 flex">
                    <div className="bg-white flex-1 rounded-[5px] p-[10px] overflow-auto">
                        {questions.map((question, index) => (
                            <QuestionItem
                                key={index}
                                question={question}
                                handleQuestion={handleQuestionClick}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex-1 ml-[20px] flex flex-col">
                    <span className="text-gray-700">Select tag</span>
                    <select
                        className="block w-full mt-1 flex-1 overflow-auto"
                        multiple
                        onChange={handleTagChange}
                    >
                        {tags.map((tag, index) => (
                            <option
                                className="mb-[5px]"
                                key={index}
                                value={tag.tag}
                            >
                                {tag.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    );
};

export default Question;
