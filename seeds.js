o Status (e.g., researching, pending approval, approved, declined) o CompanyInfo
o KeyContacts
o financialPerformanceScore

export const SEEDS = [
    {
        name: 'Joseph&co.',
        status: 'pending',
        keyContacts: [
            'Bart Starr',
            'Barry Lemeur',
            'Sue Bird',
            'Brianna Johnson'
        ],
        financialPerformanceScore: 300,
        notes: 'Overrated.'
    },

    {
        name: 'Barclay',
        status: 'researching',
        keyContacts: [
            'Ken Starr',
            'Harry Burr',
            'Jerry Johnson',
            'Billy Bean'
        ],
        financialPerformanceScore: 50,
        notes: 'Diamond in the rough'
    },

    {
        name: 'Bracketology',
        status: 'approved',
        keyContacts: [
            'Sasha Bernard',
            'Perry Lamont'
        ],
        financialPerformanceScore: 287,
        notes: 'Highly suspect'
    },
    {
        name: 'Bean Bag Co.',
        status: 'declined',
        keyContacts: [
            'Lindsey Sterling',
            'Skylar Swan',
            'Pink Floyd',
            'Sofia Borsch'
        ],
        financialPerformanceScore: 96,
        notes: "Lots of talent"
    },

    {
        name: 'The Kiwi Group',
        status: 'approved',
        keyContacts: [
            'Dez B. Ambi'
        ],
        financialPerformanceScore: 147,
        notes: 'One man band'
    },

    {
        name: 'Starling Inc.',
        status: 'researching',
        keyContacts: [
            'Kelly Ortega',
            'Shaw Brown'
        ],
        financialPerformanceScore: 292,
        notes: 'Niche market'
    },

    {
        name: 'Barker Law Firm',
        status: 'declined',
        keyContacts: [
            'Mark Simpson',
            'Tim Tundra'
        ],
        financialPerformanceScore: 151,
        notes: 'Poorly managed.'
    },

    {
        name: 'Sunshine and Rain',
        status: 'researching',
        keyContacts: [
            'Michael De Torres',
            'Sharon Camp',
            'Sarai Blankenship'
        ],
        financialPerformanceScore: 399,
        notes: 'Looks good on the outside'
    },

    {
        name: 'Johnson & Jordan',
        status: 'approved',
        keyContacts: [
            'Alissa Martin',
            'Steve Macnamara'
        ],
        financialPerformanceScore: 201,
        notes: 'A severe case of average'
    },

    {
        name: 'Black Horse',
        status: 'researching',
        keyContacts: [
            'Jerome Jackson'
        ],
        financialPerformanceScore: 333,
        notes: 'Intriguing market.'
    },
]