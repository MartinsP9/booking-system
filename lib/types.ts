export type Service = {
    name: string;
    durationMins: number;
    price: number;
    description?: string;
};

export type Person = {
    onPersonClick?: () => void;
    id: string;
    name: string;
    languages: string[];
    serviceIds: string[];
    isActive: boolean;
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

