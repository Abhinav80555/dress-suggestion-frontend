import React,{useState} from "react";


function Counter() {
const [like,setLike]=useState(0);
const [dislike,setDislike]=useState(0);

  return (
    <div>
        <button onClick={()=>setLike(like+1)}>Like</button>
        <p>{like}</p>
        <button onClick={()=>setDislike(dislike+1)}>disLike</button>
        <p>{dislike}</p>
    </div>
  )
}

export default Counter