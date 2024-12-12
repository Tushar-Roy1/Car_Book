import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const CarCard = ({ car }) => {
  const navigate = useNavigate();
 const check =async  ()=>{
  const res = await axios.get('http://localhos:3000/private/protected',{
    withCredentials:true,
  })
  if(res.data.access){
    navigate('/book');
  }
  else{
    navigate('/login')
  }
 }
  return (
    <div className='p-3'>
      <div className="card bg-base-100 shadow-xl border border-black h-full w-full flex flex-col">
        <figure className='h-52 flex-shrink-0'>
          {car.carImage ? (
            <img 
              src={car.carImage} 
              alt={car.model} 
              className='w-full h-full object-cover'
            />
          ) : (
            <p className='text-center'>No Image Available</p>
          )}
        </figure>
        <div className="card-body flex flex-col justify-between flex-grow">
          <h2 className='font-semibold font-sans text-lg'>
            {car.company}
          </h2>
          <p className='text-gray-500 text-opacity-40 text-sm'>{car.model}</p>
          <div className="flex justify-between mt-2">
            <button onClick={check}><a className="btn_square_primaryBlue rounded-md cursor-pointer">Book Now</a></button>
           
            <Link to={`/details?id=${car._id}`}>
            <a className='btn_square_primaryGreen rounded-md cursor-pointer'>Details</a>
                       </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
