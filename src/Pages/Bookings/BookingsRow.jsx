import Swal from "sweetalert2";

const BookingsRow = ({ booking, bookings, setBookings, handleBookingConfirm }) => {
    const { _id, img, service, customerName, date, price, status } = booking;
    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            fetch(` https://car-doctor-server-fu7to198r-prodeveloperbd2.vercel.app/checkout/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        if (result.isConfirmed) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        const remaining = bookings.filter(bk => bk._id !== _id)
                        setBookings(remaining)
                    }
                })
        })
    }
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-20 h-20">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-xl">{customerName}</div>
                        <div className="opacity-75 text-base font-semibold"><span className="font-bold">Service:</span> {service}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="text-lg font-bold text-[orangered]">{price}</span>
            </td>
            <td><span className="font-semibold">{date}</span></td>
            <th>
                {status === 'confirm' ?
                    <span className="font-bold text-[orangered]">confirmed</span> :
                    <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingsRow;