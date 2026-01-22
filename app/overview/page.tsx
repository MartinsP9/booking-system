import BookingOverview from "@/components/BookingOverview";
import ClientForm from "@/components/ClientForm";
import Footer from "@/components/Footer";
import PriceOverview from "@/components/PriceOverview";

const Overview = () => {
    return (
        <div>
            <BookingOverview />
            <ClientForm />
            <PriceOverview />
        </div>
    );
};

export default Overview;
