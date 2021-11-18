import React, { useState, useEffect, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { IntentContext } from "contexts/IntentContext";
import axios from "axios";
import { apiUrl } from "variables.js";

// import { Editor, EditorState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const DetailIntents = () => {
    const [detailIntent, setDetailIntents] = useState({
        name: "",
        tag: "",
        patterns: [],
        response: [],
    });

    const { id } = useParams();

    //context
    const { updatedIntent } = useContext(IntentContext);

    useEffect(() => {
        const getIntent = async () => {
            try {
                const response = await axios.get(`${apiUrl}/intents/${id}`);
                setDetailIntents(response.data.intent);
            } catch (error) {
                console.log(error);
            }
        };
        getIntent();
    }, [id]);

    const handleChangeInput = (e) => {
        setDetailIntents((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const handleChangePattern = (e) => {
        setDetailIntents((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.split(","),
        }));
    };
    const handleChangeResponse = (e) => {
        setDetailIntents((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.split(","),
        }));
    };
    const onAccept = async () => {
        const response = await updatedIntent(detailIntent);
        if (response.success) {
            alert("Intent updated successfully");
        } else {
            alert("Intent not updated");
        }
    };

    const ChangeToSlug = (text) => {
        var slug;
        slug = text.toLowerCase();
        slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a");
        slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e");
        slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, "i");
        slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o");
        slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u");
        slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y");
        slug = slug.replace(/đ/gi, "d");
        slug = slug.replace(
            /\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
            ""
        );
        slug = slug.replace(/ /gi, "_");
        slug = slug.replace(/\-\-\-\-\-/gi, "_");
        slug = slug.replace(/\-\-\-\-/gi, "_");
        slug = slug.replace(/\-\-\-/gi, "_");
        slug = slug.replace(/\-\-/gi, "_");
        slug = "@" + slug + "@";
        slug = slug.replace(/\@\-|\-\@|\@/gi, "");
        return slug;
    };
    const handleChangeTag = (e) => {
        setDetailIntents((prevState) => ({
            ...prevState,
            [e.target.name]: ChangeToSlug(detailIntent.name),
        }));
    };
    return (
        <>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                value={detailIntent.name}
                onChange={handleChangeInput}
            />
            <label htmlFor="tag">Tag</label>
            <input
                type="text"
                name="tag"
                value={detailIntent.tag}
                onChange={handleChangeInput}
                onFocus={handleChangeTag}
            />
            <label htmlFor="patterns">Patterns</label>
            <textarea
                cols="30"
                rows="10"
                name="patterns"
                value={detailIntent.patterns}
                onChange={handleChangePattern}
            ></textarea>
            <label htmlFor="response">Response</label>
            <textarea
                cols="30"
                rows="10"
                name="response"
                value={detailIntent.response}
                onChange={handleChangeResponse}
            ></textarea>
            <div className="flex justify-end">
                <button
                    className="border-[1px] border-solid rounded-[3px] mr-4 px-[20px] py-[10px] bg-[#fff] hover:bg-[#282c31] hover:text-white"
                    onClick={onAccept}
                >
                    Update
                </button>
                <NavLink
                    exact
                    to="/intents"
                    className="border-[1px] border-solid rounded-[3px] mr-4 px-[20px] py-[10px] bg-[#fff] hover:bg-[#282c31] hover:text-white"
                >
                    Cancel
                </NavLink>
            </div>
        </>
    );
};

export default DetailIntents;
