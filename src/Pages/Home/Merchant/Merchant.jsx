import React from 'react';
import location from '../../../assets/location-merchant.png'

const Merchant = () => {
    return (
        <div data-aos="fade-up"
     data-aos-anchor-placement="top-center" className="bg-no-repeat bg-[url('assets/be-a-merchant-bg.png')] rounded-2xl p-20 my-20 bg-[#03373D]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={location}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-3xl font-bold">Merchant and Customer Satisfaction is <br /> Our First Priority</h1>
                    <p className="py-6">
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                    <button className="btn m-2 text-black border-[#CAEB66] rounded-3xl font-bold bg-[#CAEB66] ">Become a Merchant</button>
                    <button className="btn text-[#CAEB66] border-[#CAEB66] bg-transparent w-70 rounded-4xl">Earn with Profast Courier</button>
                </div>
            </div>
        </div>
    );
};

export default Merchant;