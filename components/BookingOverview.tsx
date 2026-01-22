import React from "react";

const BookingOverview = () => {
    return (
        <div className="max-w-md mx-auto mt-6 bg-white rounded-2xl shadow-sm border border-gray-200">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Booking Details</h2>
            </div>

            {/* Booking Info */}
            <div className="px-6 py-5 space-y-4">
                {/* Professional */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-gray-500">{/* icon */}</svg>
                        <p className="text-sm text-gray-700">Any available professional</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-400">{/* edit icon */}</svg>
                </div>

                {/* Date & Time */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-gray-500">{/* calendar icon */}</svg>
                        <div>
                            <span className="block text-sm text-gray-700">Thursday, 29 January</span>
                            <p className="text-sm text-gray-500">12:30</p>
                        </div>
                    </div>
                    <svg className="w-4 h-4 text-gray-400">{/* edit icon */}</svg>
                </div>
            </div>

            {/* Divider Line */}
            <div className="border-t border-gray-200 mx-6"></div>

            {/* Services */}
            <div className="px-6 py-5 space-y-3">
                <h3 className="text-sm font-medium text-gray-900">Services</h3>

                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-700">Haircut</p>
                    <span className="text-sm font-medium text-gray-900">35&nbsp;€</span>
                </div>

                {/* Subtle Divider */}
                <div className="border-t border-gray-100 mt-2"></div>

                {/* Total */}
                <div className="flex items-center justify-between rounded-xl px-4 py-2 mt-2">
                    <p className="text-sm font-medium text-gray-700">Total</p>
                    <span className="text-base font-semibold text-gray-900">35&nbsp;€</span>
                </div>
            </div>
        </div>
    );
};

export default BookingOverview;
