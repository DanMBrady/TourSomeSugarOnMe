import { getBookings } from "./database.js"
import { getBands } from "./database.js"
import { getVenues } from "./database.js"

const bookings = getBookings()
const bands = getBands()
const venues = getVenues()



const findVenues =(booking,allVenues) =>{
let specificVenue = null
for(const venue of allVenues){
    if(venue.id === booking.venueId){
        specificVenue = venue
    }
}
return specificVenue
}

const findBands =(booking,allBands) =>{
    let specificBand = null
    for(const band of allBands){
        if(band.id === booking.bandId){
            specificBand = band
        }
    }
    return specificBand
}



export const Bookings = () => {
    let html =""
    html = "<ul>"

    for (const booking of bookings) {
        const band = findBands(booking,bands)
        const venue = findVenues(booking,venues)
        html += `<li id ="booking--${booking.id}">${band.name} is playing at ${venue.name} on ${booking.date}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (clickEvent)=>{
        const itemClicked = clickEvent.target
        if(itemClicked.id.startsWith("booking")){
        const [,bookingId] = itemClicked.id.split("--")
        let correctBooking = null
        for(const booking of bookings){
            if(booking.id === parseInt(bookingId)){
                correctBooking = booking
            }
        }
        let correctBand = null
        for(const band of bands){
            if(band.id === correctBooking.bandId){
                correctBand = band
            }
        }

       window.alert(`${correctBand.name} has ${correctBand.numberOfMembers} members, they play ${correctBand.genre} music, and they formed in the year ${correctBand.yearFormed}`)
        }
    }
)