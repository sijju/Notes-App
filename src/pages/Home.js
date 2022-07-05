import React from "react";
import NoteListPage from "./NoteListPage";

const Home = (props) => {
   console.log(props.name)
    

    return (
        <div>
          { props.name ? <NoteListPage/>: "You are not logged in"}
        </div>
    )
}

export default Home