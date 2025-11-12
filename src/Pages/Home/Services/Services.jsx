import React from "react";
import { FaMapMarkedAlt, FaWarehouse, FaMoneyBillWave, FaBuilding, FaUndoAlt } from "react-icons/fa";

const servicesData = [
    {
        icon: <FaMapMarkedAlt className="text-4xl text-primary mx-auto mb-4"></FaMapMarkedAlt>,
        title: "Express & Standard Delivery",
        description:
            "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
        icon: <FaMapMarkedAlt className="text-4xl text-primary mx-auto mb-4" />,
        title: "Nationwide Delivery",
        description:
            "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
        icon: <FaWarehouse className="text-4xl text-primary mx-auto mb-4" />,
        title: "Fulfillment Solution",
        description:
            "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
        icon: <FaMoneyBillWave className="text-4xl text-primary mx-auto mb-4" />,
        title: "Cash on Home Delivery",
        description:
            "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
        icon: <FaBuilding className="text-4xl text-primary mx-auto mb-4" />,
        title: "Corporate Service / Contract In Logistics",
        description:
            "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
        icon: <FaUndoAlt className="text-4xl text-primary mx-auto mb-4" />,
        title: "Parcel Return",
        description:
            "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
];

const Services = () => {
    return (
        <section className="py-16 mt-20 bg-green-100" id="services">
            <div className="container mx-auto px-4 text-center">
                {/* Section Header */}
                <h2 className="text-3xl font-bold mb-4 text-primary">Our Services</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                    We provide end-to-end delivery and logistics support across Bangladesh, ensuring speed, safety, and reliability.
                </p>

                {/* Cards Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="card bg-white shadow-md hover:bg-amber-200 hover:shadow-lg transition-all duration-300 p-6 text-center rounded-xl"
                        >
                            {service.icon}
                            <h3 className="text-xl text-primary font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
