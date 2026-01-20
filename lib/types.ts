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
    serviceId: string;
    personId?: string;
    dateId?: string;
    timeId?: string;
}