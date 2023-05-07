function Image() {
    const handleClick = () => {
        window.location.reload();
      }
  
  return (
    <div className="image">
      <div className='img'>
        <button className='btn' onClick={handleClick}>
          ещё раз
        </button>
      </div>
    </div>
  );
}

export {Image}; 