import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useNavigate, useParams } from 'react-router-dom';

export function DressDetails({ dressList }) {
  const { dressid } = useParams();
  const navigate = useNavigate();
  const dress = dressList[dressid];


  const styles = {
    backgroundColor: `${dress.color}`,
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    color: `${dress.color}`,
    justifyContent: "center",
    textAlign: "center"
  };
  return (
    <div className="dress-detail-container">
      <img className='dress-image' src={dress.image} alt={dress.name} />
      <div className='dress-specs'>
        <h2 className="dress-name">{dress.dressname}</h2>
        <p className="dress-color" style={styles}>.</p></div>
      <p className="dress-summary">{dress.summary}</p>
      <Button startIcon={<ArrowBackIosNewOutlinedIcon />} variant="outlined" onClick={() => navigate(-1)}>back</Button>
    </div>
  );
}
