import React from "react";

const AlertMessage = ({ hide, info }) => {
    return info === null ? null : (
        <div className="flex flex-col p-8 bg-white shadow-md hover:shadow-lg rounded-2xl items-center">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="border-[#000] rounded-[5px] border-[1px] flex items-center p-[5px]">
                        <box-icon
                            name={info.type}
                            type="solid"
                            class="fill-current"
                        ></box-icon>
                    </div>
                    <div className="flex flex-col ml-3">
                        <div className="font-medium leading-none">
                            {info.message}
                        </div>
                        <p className="text-sm text-gray-600 leading-none mt-1">
                            {info.submessage}
                        </p>
                    </div>
                </div>
            </div>
            <button onClick={hide} className="absolute right-2 top-2">
                <box-icon type="solid" name="x-circle"></box-icon>
            </button>
        </div>
    );
};

export default AlertMessage;
