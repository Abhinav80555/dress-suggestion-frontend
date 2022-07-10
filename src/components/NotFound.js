import React from 'react';

export function NotFound() {
  const styles = {
    display: "flex",
    justifyContent: "center",
  };


  return (
    <div style={styles}>
      <img style={{ objectFit: "fill" }} className='not-found' src="https://cdn.dribbble.com/users/1665077/screenshots/10738715/404-page-not-found_still_2x.gif?compress=1&resize=400x300" alt='404 page not found' />
      <span><h1> 404 page not found</h1></span></div>
  );

}
