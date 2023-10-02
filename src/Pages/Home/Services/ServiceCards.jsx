import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ServiceCards = ({ service }) => {
    const {_id, img, title, price } = service;
    return (
        <div className='mt-10'>
            <div className="card w-80 h-96 mx-auto bg-white shadow-xl mb-10">
                <figure className="px-2 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl w-80 h-56" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">{title}</h2>
                    <div className="flex items-center justify-between w-full">
                        <p className='font-bold text-[orangered] text-lg'>Price: ${price}</p>
                        <Link to={`/checkout/${_id}`}><FaArrowRight></FaArrowRight></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCards;