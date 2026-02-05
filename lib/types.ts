export type Service = {
    name: string;
    durationMins: number;
    price: number;
    description?: string;
};

export type Shift = {
    start: string;
    end: string;
};

export type BookingEvent = {
    start: string; // ISO string
    end: string;   // ISO string
    user: {
        name: string;
        email?: string;
        phone?: string;
    };
    serviceId: string;
};

export type Person = {
    onPersonClick?: () => void;
    id: string;
    name: string;
    languages: string[];
    serviceIds: string[];
    isActive: boolean;
    shifts: { [key: number]: Shift | null }; // 0-6 for Sunday-Saturday
    events: BookingEvent[];
    offDates: string[]; // YYYY-MM-DD
};

export type ServiceCardProps = {
    id: string;
    onCardClick: () => void;
    title: string;
    text: string;
    image: string;
    imagealt: string;
    price: string;
    isActive: boolean;
}

export type FooterButtonProps = {
    linkTo: string;
    contentButton: string;
}

export type FooterSectionProps = {
    serviceId?: string | null;
    personId?: string;
    date?: string | null;
    time?: string | null;
}

export type PickDateProps = {
    value?: string | null;
    onChange: (date: string | null) => void;
}

export type PickTimeProps = {
    selectedDate: string | null;
    time: string | null;
    setTime: (time: string | null) => void;
}

export type OverviewProps = {
    serviceId: string;
    personId?: string;
    date?: string;
    time?: string;
}

