import PickDate from "@/components/DatePicker";
import PickTime from "@/components/TimePicker";

export default function Date() {
    return (
        <main style={{ padding: 40 }}>
            <PickDate />
            <PickTime />
        </main>
    );
}
