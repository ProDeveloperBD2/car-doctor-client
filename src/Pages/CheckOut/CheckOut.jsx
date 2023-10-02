import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'

const CheckOut = () => {
    const loadedServicesDetails = useLoaderData();
    const { title, _id, price, img } = loadedServicesDetails;
    const { user } = useContext(AuthContext);
    const handleCheckOutSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const price = form.price.value;
        const order = {
            customerName: name,
            email,
            img,
            service: title,
            date,
            service_id: _id,
            price: price
        }
        console.log(order);
        fetch('https://car-doctor-server-fu7to198r-prodeveloperbd2.vercel.app/checkout', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(date => {
                if (date.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }
    return (
        <div>
            <h2 className='text-4xl text-[orangered] font-semibold'>This is CheckOut: {title}</h2>
            <div className="card-body w-4/5 mx-auto">
                <form onSubmit={handleCheckOutSubmit}>
                    <div className="md:flex lg:flex gap-10 mb-6">
                        <div className="form-control w-full">
                            <input type="text" placeholder="Name" className="input input-bordered bg-white mb-3" defaultValue={user?.displayName} name='name' required />
                        </div>
                        <div className="form-control w-full">
                            <input type="date" className="input input-bordered bg-white" name='date' required />
                        </div>
                    </div>
                    <div className="md:flex lg:flex gap-10 mb-6">
                        <div className="form-control w-full">
                            <input type="email" placeholder="Your Email" className="input input-bordered bg-white" defaultValue={user?.email} name='email' required />
                        </div>
                        <div className="form-control w-full">
                            <input type="text" placeholder="Your Price" className="input input-bordered bg-white  mb-3" name='price' defaultValue={'$' + price} required />
                        </div>

                    </div>
                    {/*   <div>
                        <div className="form-control">
                            <input type="password" placeholder="Password" className="input input-bordered h-96 bg-white" name='password' required />
                        </div>
                    </div> */}
                    <div className="form-control mt-8">
                        <input type='submit' value="Order Confirm" className="bg-[orangered] text-xl font-semibold py-2 rounded text-white cursor-pointer" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;