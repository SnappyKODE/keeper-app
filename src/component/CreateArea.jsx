import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

    
    function CreateArea(props) {

        const [text , setText] = useState(
            {
                title:"",
                content:""
            }
        )

        function handleChange(e){
            const {name,value}= e.target;
            if(name === "title"){
                setText(prev =>{
                    return{
                    title: value,
                    content : prev.content
                }
                })
            }
            else if(name === "content"){
                setText(prev =>{
                    return{
                        title: prev.title,
                        content : value
                    }
                })
            }
        }
        
        return (
        <div>
            <form className="create-note">
            <input name="title" placeholder="Title" onChange={handleChange} value={text.title}/>
            <textarea name="content" placeholder="Take a note..." rows="3"  onChange={handleChange} value={text.content}/>
            <button onClick={(e)=>{
                props.add(text.title,text.content);
                e.preventDefault();
                text.title = "";
                text.content = "";
            }}><AddIcon /> </button>
            </form>
        </div>
        );
    }
    
    export default CreateArea;
    