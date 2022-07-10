import React,{useState} from 'react'

function AddColor() {

const [color,setColor]=useState('pink');
const [colorList,setColorList]=useState(['red', 'green', 'blue']);

    const styles= {
        fontSize:"24px",
        backgroundColor:color
    }
  return (
    <div>
        <div className='add-color'>
<input onChange={(event)=>setColor(event.target.value)} style={styles} type="text" value={color} placeholder="Enter color"/>
<button onClick={()=>setColorList([...colorList,color])}>AddColor</button>
</div>
{colorList.map((clr)=>(<ColorBox color={clr}/>))}
    </div>
  )
}



function ColorBox({color}){
    const styles={
        backgroundColor:color,
        height:'35px',
        width:'300px'
    }
    return(<div style={styles}></div>)
}

export default AddColor