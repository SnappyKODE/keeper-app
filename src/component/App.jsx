import React,{useState,useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes,setNotes] =useState(()=>{
        return{
            title : JSON.parse(localStorage.getItem('t')) || [],
            content : JSON.parse(localStorage.getItem('c')) ||[]
        }
})

    useEffect(() => {
        localStorage.setItem('t', JSON.stringify(notes.title));
    }, [notes.title]);
    useEffect(() => {
        localStorage.setItem('c', JSON.stringify(notes.content));
    }, [notes.content]);


    function AddText(titleIn,contentIn){

        setNotes(prev =>{
            return{
            title: [...prev.title,titleIn],
            content:[...prev.content,contentIn]
            }
        })


    }

    function deleteText(index){
        setNotes((prev)=>{
            return{
                title:prev.title.filter((v,i)=>{
                    return i!== index;
                }),
                content:prev.content.filter((v,i)=>{
                    return i!== index;
                })
            }
        })
    }


    return (
    <div>
        <Header />
        <CreateArea add={AddText}/>
        {notes.title.map((note,index)=>{
            return <Note key={index}
                        title={note} 
                        content={notes.content[index]} 
                        del={deleteText} id={index}
                        />
        })}
        <Footer />
    </div>
    );
}

export default App;