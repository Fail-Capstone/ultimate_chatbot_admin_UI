import React from "react";
import MessageItem from "components/MessageItem";

const Message = () => {
    return (
        <div className="flex h-full">
            <div className="flex flex-1 flex-col">
                <div className="bg-white flex-1 rounded-[5px] p-[10px]">
                    <MessageItem />
                </div>
                <div className="">
                    <button className="border-[1px] border-solid rounded-[3px] mr-4 px-[20px] py-[10px] bg-[#fff] hover:bg-[#282c31] hover:text-white mt-1">
                        Load
                    </button>
                    <button className="bg-white px-[10px] py-[7px] rounded-[5px] border-[#ddd] border-[1px]">
                        Add patterns
                    </button>
                </div>
            </div>

            <div className="flex-1 ml-[20px] flex">
                <span class="text-gray-700">Select patterns</span>
                <select
                    class="form-multiselect block w-full mt-1 flex-1"
                    multiple
                >
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                </select>
            </div>
        </div>
    );
};

export default Message;
