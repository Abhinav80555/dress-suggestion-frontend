import React,{useState} from 'react'
import TextField from "@mui/material/TextField";
function AddColor() {

const [color,setColor]=useState('');
const [colorList,setColorList]=useState(['orangered', 'white', 'green']);

    const styles= {
        color:color,
        width:"40%"
    }
    
  return (
    <div >
        <div className='add-color'>
<TextField onChange={(event)=>setColor(event.target.value)} style={styles} type="text" value={color} placeholder="Enter color"/>
<button className="color-button" onClick={()=>setColorList([...colorList,color])}>Add Color</button>
</div>

{colorList.map((clr)=>(<ColorBox color={clr}/>))}

    </div>
  )
}



function ColorBox({color}){
    const styles={
        backgroundColor:color,
        marginLeft:"60px",
        height:'55px',
        width:'90%'
    }
    return(<div style={styles}></div>)
}

export default AddColor