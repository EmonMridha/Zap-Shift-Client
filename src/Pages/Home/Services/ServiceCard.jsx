// src/pages/Home/ServiceCard.jsx
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-base-200 rounded-2xl p-6 text-center">
      <div className="flex flex-col items-center">
        {icon}
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
