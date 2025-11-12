import React from 'react';

const featuresData = [
    {
        title: "Live Parcel Tracking",
        description:
            "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
        image:
            "https://i.ibb.co.com/s9b2jj8b/pexels-pixabay-38271.jpg",
    },
    {
        title: "100% Safe Delivery",
        description:
            "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
        image:
            "https://i.ibb.co.com/TqkTcgjq/pexels-artempodrez-5025659.jpg",
    },
    {
        title: "24/7 Call Center Support",
        description:
            "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
        image:
            "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=60",
    },
];

const Features = () => {
    return (
        <section data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" className="py-16 bg-green-100">
            <div className="container mx-auto px-4">
                <h2 className='text-primary text-center text-4xl mb-10 font-extrabold'>Features</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {featuresData.map((item, index) => (
                        <div
                            key={index}
                            className="card bg-base-200 shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <figure>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-56 object-cover"
                                />
                            </figure>
                            <div className="card-body bg-white shadow-2xl text-left">
                                <h3 className="text-xl text-primary font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;