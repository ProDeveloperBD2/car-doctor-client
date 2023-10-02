import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {
    return (
        <div className='mx-auto mb-5 ml-2 mt-2 mr-2'>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img4} className="w-full rounded-xl" />
                    <div className="absolute  rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-8'>
                                <button className="bg-[orangered] text-lg font-semibold py-2 rounded-lg text-white px-3">Discover More</button>
                                <button className="btn btn-outline">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-6">
                        <a href="#slide4" className="py-2 px-4 text-white rounded-full bg-[orangered]">❮</a>
                        <a href="#slide2" className="py-2 px-4 text-white rounded-full bg-[orangered]">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img5} className="w-full rounded-xl" />
                    <div className="absolute  rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-8'>
                                <button className="btn bg-[orangered] text-white">Discover More</button>
                                <button className="btn btn-outline">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-6">
                        <a href="#slide1" className="py-2 px-4 text-white rounded-full bg-[orangered]">❮</a>
                        <a href="#slide3" className="py-2 px-4 text-white rounded-full bg-[orangered]">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full rounded-xl" />
                    <div className="absolute  rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-8'>
                                <button className="btn bg-[orangered] text-white">Discover More</button>
                                <button className="btn btn-outline">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-6">
                        <a href="#slide2" className="py-2 px-4 text-white rounded-full bg-[orangered]">❮</a>
                        <a href="#slide4" className="py-2 px-4 text-white rounded-full bg-[orangered]">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img6} className="w-full rounded-xl" />
                    <div className="absolute  rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-8'>
                                <button className="btn bg-[orangered] text-white">Discover More</button>
                                <button className="btn btn-outline">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-6">
                        <a href="#slide3" className="py-2 px-4 text-white rounded-full bg-[orangered]">❮</a>
                        <a href="#slide1" className="py-2 px-4 text-white rounded-full bg-[orangered]">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;