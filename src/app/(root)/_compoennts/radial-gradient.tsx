const RadialGradient =()=>{
  return (
    <div className="absolute pointer-events-none">
        <div
          className="rounded-full bg-white"
          style={{
            width: '400px',
            height: '400px',
            opacity: 0.15,
            filter: 'blur(100px)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
        </div>
  )
}

export default RadialGradient;
