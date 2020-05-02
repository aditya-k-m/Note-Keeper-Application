import React from "react";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea (props) {
    const [isTitle, setTitle] = React.useState("");
    const [isContent, setContent] = React.useState("");
    const [isExpanded, setExpanded] = React.useState(false);
    function handleChange (event){
        if (event.target.name === "title"){
            let temp = event.target.value;
            setTitle(temp);
        }
        else if (event.target.name === "content"){
            let temp = event.target.value;
            setContent(temp);
        }
    }
    function expand (){
        setExpanded(true);
    }

    return(<div>
        <form className="create-note">
            {isExpanded && (<input onChange={handleChange} name="title" placeholder="Title"/>)}
            <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1}/>
            <Zoom in={isExpanded}>
            <Fab onClick={() => {
                props.callAddNote({title: isTitle, content: isContent});
            }}>
                +
            </Fab>
            </Zoom>
        </form>
    </div>)
}

export default CreateArea;