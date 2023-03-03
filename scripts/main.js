import { Venues } from "./venues.js"
import { Bands } from "./bands.js"
import { Bookings } from "./bookings.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1 class ="header">Tour Some Sugar</h1>
<article class="details">
<div class ="top">
<img class ="image" src ="https://content.fortune.com/wp-content/uploads/2020/10/GettyImages-179662418.jpg">
<article class="bookings">
<section class="bb">
    <article class ="book">Bookings</article>
    ${Bookings()}
    </section>
</article>
</div>
<div class = "bottom">
    <section class="venues">
   <section class ="v">
        <h2>Venues</h2>
        ${Venues()}
        </section>
    </section>
    <section class="bands">
    <section class ="b">
        <h2>Bands</h2>
        ${Bands()}
        </section>
    </section>
    </div>
</article>

`

mainContainer.innerHTML = applicationHTML