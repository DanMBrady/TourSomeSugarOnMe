const database ={
    venues:[{
        id:1,
        name:"Hannaford",
        address:"46 Hannaford road",
        squareFootage: 25,
        maximumOccupancy: 25,

    },{
        id:2,
        name:"Lowes",
        address:"17 Lowes street",
        squareFootage: 30,
        maximumOccupancy: 30,

    },{
        id:3,
        name:"Cool Insuring Arena ",
        address:"Next to Burger King",
        squareFootage: 15,
        maximumOccupancy: 15,

    },{
        id:4,
        name:"RainBrady House",
        address:"46 Sheraton lane",
        squareFootage: 10,
        maximumOccupancy: 10,

    },{
        id:5,
        name:"Crandall Park",
        address:"Crandall Park road",
        squareFootage: 40,
        maximumOccupancy: 40,

    },{
        id:6,
        name:"TD Bank",
        address:"Bank road",
        squareFootage: 20,
        maximumOccupancy: 20,

    },
],
    bands: [{
        id:1,
        name:"SmartGuys",
        numberOfMembers: 3,
        genre:"Jazz",
        yearFormed: 2020,
    },{
        id:2,
        name:"Swords vs Sheilds",
        numberOfMembers: 6,
        genre:"Metal",
        yearFormed: 2014,
    },{
        id:3,
        name:"Johnny an the rest",
        numberOfMembers: 4,
        genre:"Blues",
        yearFormed: 2007,
    },{
        id:4,
        name:"Sarahs Fish",
        numberOfMembers: 3,
        genre:"Polka",
        yearFormed: 1997,
    },{
        id:5,
        name:"Thawne",
        numberOfMembers: 2,
        genre:"Speed Metal",
        yearFormed: 2000,
    },{
        id:6,
        name:"Beatles Tribute",
        numberOfMembers: 10,
        genre:"60s rock and roll",
        yearFormed: 2004,
    },
],
    bookings:[{
        id:1,
        venueId:4,
        bandId:4,
        date:"10/04/23",

    },{
        id:2,
        venueId:2,
        bandId:6,
        date:"10/21/23",

    },{
        id:3,
        venueId:6,
        bandId:2,
        date:"11/11/23",

    },{
        id:4,
        venueId:4,
        bandId:5,
        date:"11/23/23",

    },{
        id:5,
        venueId:5,
        bandId:1,
        date:"12/01/23",

    },{
        id:6,
        venueId:2,
        bandId:2,
        date:"12/23/23",

    },{
        id:7,
        venueId:3,
        bandId:6,
        date:"01/07/24",

    },{
        id:8,
        venueId:6,
        bandId:3,
        date:"01/20/24",

    },{
        id:9,
        venueId:1,
        bandId:5,
        date:"02/20/24",

    },
]

}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}





