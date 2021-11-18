import React from "react";
import MessageItem from "components/MessageItem";

const Message = () => {
    return (
        <div className="flex h-full">
            <div className="bg-white rounded-[5px] p-[10px] flex-1">
                <div className="message-frame">
                    <MessageItem />
                </div>
                <button>Load</button>
            </div>

            <div className="flex-1 ml-[20px]">
                <span class="text-gray-700">Select patterns</span>
                <select
                    class="form-multiselect block w-full mt-1 h-[300px]"
                    multiple
                >
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                </select>
                <button className="bg-white px-[10px] py-[7px] rounded-[5px] border-[#ddd] border-[1px]">
                    Add patterns
                </button>
            </div>
        </div>
    );
};

export default Message;