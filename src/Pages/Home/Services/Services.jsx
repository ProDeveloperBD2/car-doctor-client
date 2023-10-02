import { useEffect, useState } from "react";
import ServiceCards from "./ServiceCards";

const Services = () => {
    const [services, setServices] = useState([]);
    console.log(services)
    useEffect(() => {
        fetch('https://car-doctor-server-fu7to198r-prodeveloperbd2.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-2 mb-16">
            <div className="text-center">
                <h3 className='text-2xl text-[orangered] font-bold mb-1'>Service</h3>
                <h1 className="text-5xl font-bold mb-4">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl gap-6 mx-auto">
                {
                    services.map(service => <ServiceCards key={service._id} service={service}></ServiceCards>)
                }
            </div>
        </div>
    );
};

export default Services;