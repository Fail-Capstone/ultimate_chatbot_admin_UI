import React from "react";

const Message = () => {
    return (
        <div className="flex h-full">
            <div className="message-frame">
                <div className="message-item">
                    <div className="message">iọadljskaldlạd</div>
                    <input
                        type="checkbox"
                        className="m-0 ml-3 w-[20px] h-[20px]"
                    />
                </div>
                <div className="message-item">
                    <div className="message">iọadljskaldlạd</div>
                    <input
                        type="checkbox"
                        className="m-0 ml-3 w-[20px] h-[20px]"
                    />
                </div>
            </div>
            <div className="select-patterns w-[50%] ml-[20px]">
                <span class="text-gray-700">Select patterns</span>
                <select class="form-multiselect block w-full mt-1 h-[300px]" multiple>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                </select>
                <button className="bg-white px-[10px] py-[7px] rounded-[5px] border-[#ddd] border-[1px]">Add patterns</button>
            </div>
        </div>
    );
};

export default Message;
