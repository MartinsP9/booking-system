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

export const staff = [
    {
        "id": "ga1",
        "name": "Gatis Kandis",
        "languages": ["Latvian","English","Russian"],
        "serviceIds": ["s1", "s2"],
        "shiftStart": ['13:00'],
        "shiftEnd": ['18:00'],
        "offDates": ['2026-01-29', '2026-02-05'],
        "offDays": [6,0],
        "bookedTimes": [{'date': '2026-01-29', 'reservedTimes': ['13:00', '13:45']}, {'date': '2026-01-28', 'reservedTimes': ['13:00', '13:45']}],
    },
    {
        "id": "ga2",
        "name": "Gatis Andis",
        "languages": ["Latvian","English","Russian"],
        "serviceIds": ["s2", "s3"],
        "shiftStart": ['14:00'],
        "shiftEnd": ['18:00'],
        "offDates": ['2026-01-29', '2026-02-02'],
        "offDays": [6, 0],
        "bookedTimes": [{'date': '2026-01-29', 'reservedTimes': ['13:00', '14:00']}, {'date': '2026-01-28', 'reservedTimes': ['13:00', '14:00']}],
    },
    
    {
        "id": "ga3",
        "name": "Gatis nDis",
        "languages": ["Latvian", "Russian"],
        "serviceIds": ["s3", "s4"],
        "shiftStart": ['15:00'],
        "shiftEnd": ['18:00'],
        "offDates": ['2026-01-28', '2026-02-03'],
        "offDays": [6,0],
        "bookedTimes": [{'date': '2026-01-29', 'reservedTimes': ['13:00', '14:00']}, {'date': '2026-01-28', 'reservedTimes': ['13:00', '14:00']}],
    },
    {
        "id": "ga4",
        "name": "Gatis Dis",
        "languages": ["Latvian","English","Russian"],
        "serviceIds": ["s4", "s5"],
        "shiftStart": ['16:00'],
        "shiftEnd": ['18:00'],
        "offDates": ['2026-01-28', '2026-02-04'],
        "offDays": [6,0],
        "bookedTimes": [{'date': '2026-01-29', 'reservedTimes': ['13:00', '14:00']}, {'date': '2026-01-28', 'reservedTimes': ['13:00', '14:00']}],
    },
    {
        "id": "ga5",
        "name": "Gatis Is",
        "languages": ["Latvian","English"],
        "serviceIds": ["s5", "s6"],
        "shiftStart": ['15:00'],
        "shiftEnd": ['18:00'],
        "offDates": ['2026-01-28', '2026-02-05'],
        "offDays": [6,0],
        "bookedTimes": [{'date': '2026-01-29', 'reservedTimes': ['13:00', '14:00']}, {'date': '2026-01-28', 'reservedTimes': ['13:00', '14:00']}],
    // bookedDates
    },
]

//  SERVICE
//     - id
//     - title
//     - description
//     - image
//     - image alt
//     - duration
//     - price

//  PERSON
//     - id
//     - name
//     - surname
//     - description ??
//     - languages
//     - services
//     - work/off days
//     - shift times
//     - booked times