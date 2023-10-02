import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingsRow from "./BookingsRow";
import { useNavigate } from "react-router-dom";


const Bookings = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const url = `https://car-doctor-server-fu7to198r-prodeveloperbd2.vercel.app/checkout?email=${user.email}`;
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setBookings(data)
                }
                else {
                    navigate('/')
                }
            })
    }, [url, navigate])
    const handleBookingConfirm = _id => {
        fetch(`https://car-doctor-server-fu7to198r-prodeveloperbd2.vercel.app/checkout/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(bk => bk._id !== _id);
                    const updated = bookings.find(bk => bk._id === _id);
                    updated.status = 'confirm';
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings)
                }
            })
    }
    return (
        <div>
            <h2 className="text-4xl mt-4 text-center mb-6 text-[orangered] font-bold">Bookings: {bookings.length}</h2>
            <div className="overflow-x-auto mb-20 w-4/5 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingsRow
                                key={booking._id}
                                booking={booking}
                                bookings={bookings}
                                setBookings={setBookings}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;