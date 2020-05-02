import React from "react";
import Header from "./Components/Header.jsx";
import Note from "./Components/Note.jsx";
import Footer from "./Components/Footer.jsx";
import CreateArea from "./Components/CreateArea.jsx";


function App (){
    const [isNotes, setNotes] = React.useState([]);
    function addNote(note) {
        setNotes(prevValues => {
            return([...prevValues, note]);
        });
        console.log(isNotes);
    }
    function deleteNote(id) {
        setNotes((prevValues) => {
        return prevValues.filter((noteItem, index) => {
            return (index != id && noteItem);
        });
    });
    }
    return(<div>
        <Header />
        <CreateArea callAddNote={addNote}/>
        {isNotes.map((noteItem, index) => {
            return (<Note key={index} id={index} title={noteItem.title} content={noteItem.content} callDeleteNote={deleteNote} />);
        })}
        <Footer />
    </div>);
}

export default App;