import React from 'react';
import { useForm } from 'react-hook-form';

const SendParcle = () => {

        const {register, handleSubmit, formState: {errors}} = useForm();

        const onSubmit = data => {
            console.log(data);
    }
    return (
        <div className="max-w-md mx-auto p-6 bg-blue shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-2">Send a Parcel</h1>
            <p className="mb-4 text-gray-600">Fill in the details to send your parcel safely.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                {/* Sender Info */}
                <div>
                    <label className="block mb-1 font-medium">Sender Name</label>
                    <input
                        type="text"
                        {...register('senderName', { required: 'Sender name is required' })}
                        className="w-full border rounded px-3 py-2"
                    />
                    {errors.senderName && <p className="text-red-500 text-sm">{errors.senderName.message}</p>}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Pickup Location</label>
                    <input
                        type="text"
                        {...register('pickupLocation', { required: 'Pickup location is required' })}
                        className="w-full border rounded px-3 py-2"
                    />
                    {errors.pickupLocation && <p className="text-red-500 text-sm">{errors.pickupLocation.message}</p>}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Delivery Location</label>
                    <input
                        type="text"
                        {...register('deliveryLocation', { required: 'Delivery location is required' })}
                        className="w-full border rounded px-3 py-2"
                    />
                    {errors.deliveryLocation && <p className="text-red-500 text-sm">{errors.deliveryLocation.message}</p>}
                </div>

                {/* Parcel Info */}
                <div>
                    <label className="block mb-1 font-medium">Parcel Weight (kg)</label>
                    <input
                        type="number"
                        {...register('weight', { required: 'Weight is required', min: 0.1 })}
                        className="w-full border rounded px-3 py-2"
                        step="0.1"
                    />
                    {errors.weight && <p className="text-red-500 text-sm">{errors.weight.message}</p>}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Parcel Type</label>
                    <select
                        {...register('parcelType', { required: 'Parcel type is required' })}
                        className="w-full border rounded px-3 py-2"
                    >
                        <option value="">Select Type</option>
                        <option value="document">Document</option>
                        <option value="package">Package</option>
                        <option value="fragile">Fragile</option>
                    </select>
                    {errors.parcelType && <p className="text-red-500 text-sm">{errors.parcelType.message}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-700
                     text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                    Send Parcel
                </button>
            </form>
        </div>
    );
};

export default SendParcle;