import React from "react";

const ClientForm = () => {
    return (
        <form
            className="w-full max-w-[560px] mx-auto mt-5 bg-white rounded-2xl shadow-sm border border-gray-200"
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
            </div>

            <div className="px-6 py-5 space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        placeholder="Enter your phone number, including the country code"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Comments</label>
                    <input
                        type="text"
                        placeholder="Comment"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* <div className="flex items-center justify-between pt-2">
                    <div>
                        <p className="text-sm text-gray-500">Reminder</p>
                        <p className="text-sm font-medium text-gray-900">Per 2 hours prior to visit</p>
                    </div>

                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div> */}

                <div className="pt-3 border-t border-gray-200"></div>

                <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <p className="text-sm text-gray-700 leading-snug">
                        I agree to the processing of my personal data and confirm that I have read and accepted the
                        <span className="text-blue-600 underline cursor-pointer">Privacy Policy</span>
                        and
                        <span className="text-blue-600 underline cursor-pointer">User Agreement</span>
                    </p>
                </div>

                <button
                    type="submit"
                    className="
                        w-full rounded-2xl bg-emerald-900 text-white
                        py-3 text-sm font-medium
                        hover:bg-emerald-950 transition
                    "
                >
                    Submit booking
                </button>
            </div>
        </form>
    );
};

export default ClientForm;
