// seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const Festival = require('./models/festival'); // adjust path to your model

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

(async () => {
  try {
    await Festival.deleteMany({});          // clean slate

    const seedFestivals = [
        {
          title: "St. Patrick's Festival",
          startDate: new Date("2026-03-14"),
          endDate: new Date("2026-03-17"),
          county: "Various", 
          website: "https://stpatricksfestival.ie/",
          shortDesc: "Ireland's biggest national celebration with parades, music, and cultural events."
        },
        {
          title: "Galway Christmas Market",
          startDate: new Date("2025-11-07"),
          endDate: new Date("2025-12-31"),
          county: "Galway",
          shortDesc: "Known for its vibrant atmosphere, the market offers a unique blend of traditional and contemporary where visitors can explore over 50 wooden chalets lining the square offering scrumptious seasonal treats, festive beverages and a large variety of crafts and gifts.",
          website: "https://www.christmasmarketgalway.com/"
        },
        {
          title: "Out to Lunch",
          startDate: new Date("2026-01-09"),
          endDate: new Date("2026-01-31"),
          county: "Antrim",
          shortDesc: "The Out to Lunch Festival will feature live music, comedy, theatre, film and other events often paired with a hot launch.",
          website: "https://www.belfastcity.gov.uk/Events/Out-to-Lunch-Arts-Festival-2026",
        },
        {
          title: "Corkmas",
          startDate: new Date("2025-11-14"),
          endDate: new Date("2025-12-31"),
          county: "Cork",
          shortDesc: "A Cork Christmas Celebration",
          website: "https://www.corkcity.ie/en/a-cork-christmas-celebration",
        },
        {
          title: "Winterval Waterford",
          startDate: new Date("2025-11-21"),
          endDate: new Date("2025-12-23"),
          county: "Waterford",
          shortDesc: "Ireland's largest Christmas festival, and now the European City of Christmas, will return to Waterford in November and December for its 13th year with an even bigger and more festive program.",
          website: "https://winterval.ie/"
        },
        {
          title: "Galway International Arts Festival",
          startDate: new Date("2026-07-13"),
          endDate: new Date("2026-07-26"),
          county: "Galway",
          website: "https://www.giaf.ie/",
          shortDesc: "World-class theatre, music, and visual arts in Galway."
        },
        {
          title: "Electric Picnic",
          startDate: new Date("2026-08-28"),
          endDate: new Date("2026-08-30"),
          county: "Laois",
          website: "https://www.electricpicnic.ie/",
          shortDesc: "Ireland's premier music and arts festival."
        },
        {
          title: "Wexford Festival Opera",
          startDate: new Date("2026-10-15"),
          endDate: new Date("2026-10-31"),
          county: "Wexford",
          website: "https://www.wexfordopera.com/",
          shortDesc: "Celebrated opera festival featuring rare and innovative productions."
        },
        {
          title: "Yulefest Kilkenny",
          startDate: new Date("2025-11-29"),
          endDate: new Date("2025-12-23"),
          county: "Kilkenny",
          website: "https://yulefestkilkenny.ie/",
          shortDesc: "Visitors to the festival can expect festive treats, creative crafts, live music and family entertainment each weekend along with special events each week."
        },
        {
          title: "Belfast Christmas Market",
          startDate: new Date("2025-11-15"),
          endDate: new Date("2025-12-22"),
          county: "Antrim",
          website: "https://www.belfastcity.gov.uk/Events/Belfast-Christmas-Market",
          shortDesc: "With over 100 international and local traders, this outdoor market offers a delightful array of quality Christmas fayre, handcrafted goods, and bespoke artisan products."
        },
        {
          title: "Atlantic Irish Fest",
          startDate: new Date("2026-01-17"),
          endDate: new Date("2026-01-21"),
          county: "Donegal",
          shortDesc: "The Atlantic Irish Fest showcases some of Donegal's best traditional music and musicians.",
          website: "https://www.govisitdonegal.com/things-to-do/activities/atlantic-irish-music-festival"
        },
        {
          title: "TradFest",
          startDate: new Date("2026-01-21"),
          endDate: new Date("2026-01-25"),
          county: "Dublin",
          shortDesc: "TradFest is a joyful celebration of Irish music and culture that takes place each January in Dublin, Ireland.",
          website: "https://tradfest.com/",
        },
        {
            title: "Midwinter Festival",
            startDate: new Date("2026-01-23"),
            endDate: new Date("2026-01-25"),
            county: "Galway",
            shortDesc: "The Midwinter Festival: The Quartet Extends celebrates the remarkable versatility of the string quartet.",
            website: "galwaytourism.ie/event/music-for-galway-midwinter-festival/"
        },
        {
          title: "A Sliver of Light",
          startDate: new Date("2026-01-23"),
          endDate: new Date("2026-01-25"),
          county: "Clare",
          shortDesc: " Sliver Of Light is a music & arts weekender held in Hotel Doolin, situated amongst the winter majesty and drama of the West Clare coastline.",
          website: "https://www.eventbrite.ie/e/a-sliver-of-light-2026-tickets-1870539256269"
        },
        {
          title: "Brigid - Spirit of Kildare",
          startDate: new Date("2026-01-29"),
          endDate: new Date("2026-02-02"),
          county: "Kildare",
          shortDesc: "The Brigid 2026 | Spirit of Kildare Festival is an inclusive county-wide celebration that invites locals and visitors to experience Kildare’s creativity, culture, and community spirit.",
          website: "https://www.spiritofbrigid.ie/"
        },
        {
          title: "Classics Now",
          startDate: new Date("2026-01-30"),
          endDate: new Date("2026-02-01"),
          county: "Dublin",
          shortDesc: "Classics Now is an exciting cultural festival online in Dublin and beyond. Dive into the art, literature and ideas of the Ancient Greeks and Romans as interpreted and reimagined by outstanding artists today.",
          website: "https://www.classicsnow.ie/"
        },
        {
          title: "John Mc Fadden Festival",
          startDate: new Date("2026-01-30"),
          endDate: new Date("2026-02-01"),
          county: "Mayo",
          shortDesc: "The John McFadden Festival 2026: A Celebration of Culture, Music, and Community.",
          website: "https://johnmcfadden.org/"
        },
        {
          title: "IMBOLC International Music Festival",
          startDate: new Date("2026-02-01"),
          endDate: new Date("2026-02-07"),
          county: "Derry",
          shortDesc: "IMBOLC International Music Festival is one of the highlights of the North West cultural calendar and one of Ireland's first music festivals.",
          website: "https://www.imbolcfestival.com/"
        },
        {
          title: "Scene + Heard",
          startDate: new Date("2026-02-12"),
          endDate: new Date("2026-02-28"),
          county: "Dublin",
          shortDesc: "Scene + Heard is a breeding ground for new work to develop and tour both nationally & internationally as well as in the festival circuits.",
          website: "https://www.sceneandheard.ie/"
        },
        {
          title: "Dublin International Film Festival",
          startDate: new Date("2026-02-19"),
          endDate: new Date("2026-03-01"),
          county: "Dublin",
          shortDesc: "DIFF brings the best of Irish and international cinema to the capital for a celebration of storytelling.",
          website: "https://www.diff.ie/"
        },
        {
          title: "Mother Tongues Festival",
          startDate: new Date("2026-02-20"),
          endDate: new Date("2026-02-21"),
          county: "Dublin",
          shortDesc: "Celebrating Ireland's cultural and linguistic diversity, the Festival uses the arts to foster dialogue and inclusion in a joyful atmosphere.",
          website: "https://mothertonguesfestival.com/"
        },
        {
          title: "Ortús Chamber Music Festival",
          startDate: new Date("2026-02-21"),
          endDate: new Date("2026-03-01"),
          county: "Cork",
          shortDesc: "The Ortús Chamber Music Festival brings together top Irish and international musicians to perform around Cork City and County.",
          website: "http://ortusfestival.ie/"
        },
        {
          title: "Dublin Bowie Festival",
          startDate: new Date("2026-02-24"),
          endDate: new Date("2026-03-01"),
          county: "Dublin",
          shortDesc: "The Bowie festival in Dublin celebrates all things, you guessed it, David Bowie!",
          website: "https://www.dublinbowiefestival.ie/"
        },
        {
          title: "All Shucked Up",
          startDate: new Date("2026-02-27"),
          endDate: new Date("2026-03-01"),
          county: "Cork",
          shortDesc: "Howth Guinness Oyster and Music Festival",
          website: "https://allshuckedup.ie/"
        },
        {
          title: "Fingal International Festival of Voices",
          startDate: new Date("2026-03-05"),
          endDate: new Date("2026-03-08"),
          county: "Dublin",
          shortDesc: "The seaside town of Balbriggan in Co. Dublin will come alive for a week with ensembles, performing groups and singers from around the world.",
          website: "https://fingalfestivalofvoices.com/"
        },
        {
          title: "Finding a Voice",
          startDate: new Date("2026-03-05"),
          endDate: new Date("2026-03-08"),
          county: "Tipperary",
          shortDesc: "Finding a Voice is a festival of music by women composers through the ages and around the world, in celebration of International Women's Day.",
          website: "https://www.findingavoice.ie/"
        },
        {
        title: "Belfast Children's Festival",
          startDate: new Date("2026-03-05"),
          endDate: new Date("2026-03-14"),
          county: "Antrim",
          shortDesc: "Belfast Children’s Festival includes local, national and international performances and events to entertain, surprise and delight audiences.",
          website: "https://youngatart.co.uk/belfast-childrens-festival/"
        },
        {
          title: "Dublin Racing Festival",
          startDate: new Date("2026-01-31"),
          endDate: new Date("2026-02-01"),
          county: "Dublin",
          shortDesc: "The Dublin Racing Festival never fails to deliver the ultimate blend of world-class sport and unforgettable atmosphere.",
          website: "https://www.leopardstown.com/dublinracingfestival"
        },
        {
          title: "Tedfest",
          startDate: new Date("2026-03-05"),
          endDate: new Date("2026-03-08"),
          county: "Galway",
          shortDesc: "TedFest is an annual festival that celebrates the life of 'Father Ted' star and comedian Dermot Morgan.",
          website: "https://tedfest.org/"
        }
    ];

    await Festival.insertMany(seedFestivals);
    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
