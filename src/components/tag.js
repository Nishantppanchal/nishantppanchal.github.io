import React from "react";

function Tag(props) {
    return (
        <div className="px-1 border-2 border-solid border-slate-500 w-fit min-w-fit rounded-full text-sm text-slate-500">
            {props.tagText}
        </div>
    )
}

export default Tag;