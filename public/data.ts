import { Person } from "@/lib/types";

export const services = [
    {
        "id": "s1",
        "title": "Haircut",
        "text": "45 min · Klasisks vai moderns griezums balstoties uz Jūsu vēlmēm. Matu mazgāšana un veidošana iekļauta.",
        "image": "haircut-img.png",
        "imagealt": "Some guy getting a haircut",
        "price": "45",
        "duration": "00:45"
    },
    {
        "id": "s2",
        "title": "Hair Coloring",
        "text": "90 min · Profesionāla matu krāsošana ar kvalitatīvām krāsām. Iekļauta konsultācija un matu kopšana.",
        "image": "haircoloring-img.png",
        "imagealt": "Person getting hair dye applied",
        "price": "70",
        "duration": "01:30"
    },
    {
        "id": "s3",
        "title": "Hair Styling",
        "text": "30 min · Veidošana īpašiem notikumiem vai ikdienai. Fēns, lokas vai taisnošana pēc Jūsu izvēles.",
        "image": "hairstyling-img.png",
        "imagealt": "Stylist blow drying hair",
        "price": "35",
        "duration": "00:30"
    },
    {
        "id": "s4",
        "title": "Beard Trim",
        "text": "25 min · Precīza bārdas apgriešana un formēšana. Iekļauta konsultācija par kopšanas līdzekļiem.",
        "image": "beardtrim-img.png",
        "imagealt": "Barber trimming beard",
        "price": "25",
        "duration": "00:25"
    },
    {
        "id": "s5",
        "title": "Haircut + BeardTrim",
        "text": "60 min · Roku kopšana ar nagu formēšanu, kutikulu apstrādi un lakas uzklāšanu. Iekļauta masāža.",
        "image": "beardtrim-haircut-img.png",
        "imagealt": "Person receiving a manicure",
        "price": "40",
        "duration": "01:00"
    },
    {
        "id": "s6",
        "title": "Childrens Haircut",
        "text": "75 min · Pēdu kopšana ar nagu apstrādi, kutikulu tīrīšanu un lakas uzklāšanu. Relaksējoša masāža iekļauta.",
        "image": "kido-img.png",
        "imagealt": "Foot massage and pedicure",
        "price": "50",
        "duration": "01:15"
    }
]

export const staff: Person[] = [
    {
        "id": "ga1",
        "name": "Gatis Kandis",
        "languages": ["Latvian","English","Russian"],
        "serviceIds": ["s1", "s2"],
        "isActive": true,
        "shifts": {
            1: { start: '13:00', end: '18:00' },
            2: { start: '13:00', end: '18:00' },
            3: { start: '13:00', end: '18:00' },
            4: { start: '13:00', end: '18:00' },
            5: { start: '13:00', end: '18:00' },
            6: null,
            0: null
        },
        "offDates": ['2026-01-29', '2026-02-05'],
        "events": [
            {
                start: '2026-01-29T13:00:00',
                end: '2026-01-29T13:45:00',
                user: { name: 'John Doe' },
                serviceId: 's1'
            },
            {
                start: '2026-01-28T13:00:00',
                end: '2026-01-28T13:45:00',
                user: { name: 'Jane Doe' },
                serviceId: 's1'
            }
        ],
    },
    {
        "id": "ga2",
        "name": "Gatis Andis",
        "languages": ["Latvian","English","Russian"],
        "serviceIds": ["s2", "s3"],
        "isActive": true,
        "shifts": {
            1: { start: '14:00', end: '18:00' },
            2: { start: '14:00', end: '18:00' },
            3: { start: '14:00', end: '18:00' },
            4: { start: '14:00', end: '18:00' },
            5: { start: '14:00', end: '18:00' },
            6: null,
            0: null
        },
        "offDates": ['2026-01-29', '2026-02-02'],
        "events": [
            {
                start: '2026-01-29T13:00:00',
                end: '2026-01-29T14:00:00',
                user: { name: 'Alice' },
                serviceId: 's2'
            },
            {
                start: '2026-01-28T13:00:00',
                end: '2026-01-28T14:00:00',
                user: { name: 'Bob' },
                serviceId: 's2'
            }
        ],
    },
    {
        "id": "ga3",
        "name": "Gatis nDis",
        "languages": ["Latvian", "Russian"],
        "serviceIds": ["s3", "s4"],
        "isActive": true,
        "shifts": {
            1: { start: '15:00', end: '18:00' },
            2: { start: '15:00', end: '18:00' },
            3: { start: '15:00', end: '18:00' },
            4: { start: '15:00', end: '18:00' },
            5: { start: '15:00', end: '18:00' },
            6: null,
            0: null
        },
        "offDates": ['2026-01-28', '2026-02-03'],
        "events": [
            {
                start: '2026-01-29T13:00:00',
                end: '2026-01-29T14:00:00',
                user: { name: 'Charlie' },
                serviceId: 's3'
            },
            {
                start: '2026-01-28T13:00:00',
                end: '2026-01-28T14:00:00',
                user: { name: 'David' },
                serviceId: 's3'
            }
        ],
    },
    {
        "id": "ga4",
        "name": "Gatis Dis",
        "languages": ["Latvian","English","Russian"],
        "serviceIds": ["s4", "s5"],
        "isActive": true,
        "shifts": {
            1: { start: '16:00', end: '18:00' },
            2: { start: '16:00', end: '18:00' },
            3: { start: '16:00', end: '18:00' },
            4: { start: '16:00', end: '18:00' },
            5: { start: '16:00', end: '18:00' },
            6: null,
            0: null
        },
        "offDates": ['2026-01-28', '2026-02-04'],
        "events": [
            {
                start: '2026-01-29T13:00:00',
                end: '2026-01-29T14:00:00',
                user: { name: 'Eve' },
                serviceId: 's4'
            },
            {
                start: '2026-01-28T13:00:00',
                end: '2026-01-28T14:00:00',
                user: { name: 'Frank' },
                serviceId: 's4'
            }
        ],
    },
    {
        "id": "ga5",
        "name": "Gatis Is",
        "languages": ["Latvian","English"],
        "serviceIds": ["s5", "s6"],
        "isActive": true,
        "shifts": {
            1: { start: '15:00', end: '18:00' },
            2: { start: '15:00', end: '18:00' },
            3: { start: '15:00', end: '18:00' },
            4: { start: '15:00', end: '18:00' },
            5: { start: '15:00', end: '18:00' },
            6: null,
            0: null
        },
        "offDates": ['2026-01-28', '2026-02-05'],
        "events": [
            {
                start: '2026-01-29T13:00:00',
                end: '2026-01-29T14:00:00',
                user: { name: 'Grace' },
                serviceId: 's5'
            },
            {
                start: '2026-01-28T13:00:00',
                end: '2026-01-28T14:00:00',
                user: { name: 'Heidi' },
                serviceId: 's5'
            }
        ],
    },
]
