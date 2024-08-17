import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
    // packSelected = new BehaviorSubject({});
    packSelected = new BehaviorSubject<any>({})

  constructor() { }

  private data: any;
  setData(data: any) {
    console.log(JSON.stringify(data));
    this.data = data;
  }
  getData(): any {
    return this.data;
  }

  clearData() {
    this.data = null;
  }



  getProductsData() {
    return [
      {
        id: 1,
        name: "Solo Trip to Kashmir",
        price: "53,000",
        image: "https://kashmirtravelportal.com/wp-content/uploads/2024/07/vkkg9xouczi.jpg",
        description: "Conquer snow-capped peaks, glacial lakes, and lush valleys.",
        days: 5,
        nights: 4,
        destinations: ["srinagar", "sonamarg", "gulmarg", "pahalgam"],
        rating: 8,
        packBadge: "BESTSELLING",
        activities: [
          {
            "day": "Airport to Srinagar",
            "dayActivity": "Site Seeing",
            "return": true
          },
          {
            "day": "Srinagar to sonamarg",
            "dayActivity": "Exploring Sonamarg",
            "return": true
          },
          {
            "day": "Srinagar to Gulmarg",
            "dayActivity": "Exploring Gulmarg",
            "return": true
          },
          {
            "day": "Srinagar to Pahalgam",
            "dayActivity": "Exploring Betaab, Aru Chandanwari",
            "return": true
          },

          {
            "day": "Srinagar to Airport",
            "dayActivity": "Leaving with beautiful Memories",
            "return": true
          },
        ],
        inclusions: ["4 Night accomdation", "Daily breakfast and dinner", "pick and drop", "1 shikara ride"]
      },

      {
        id: 2,
        name: "Solo Trip",
        price: "Rs 59000",
        image: "https://kashmirtravelportal.com/wp-content/uploads/2024/07/vkkg9xouczi.jpg",
        description: "Conquer snow-capped peaks, glacial lakes, and lush valleys.",
        days: 5,
        nights: 4,
        destinations: ["srinagar", "sonamarg", "pahalgam", "gulmarg"],
        rating: 8,
        packBadge: 'TRENDING',
        activities: [
          {
            "day": "Airport to Srinagar",
            "dayActivity": "Site Seeing",
            "return": true
          },
          {
            "day": "Srinagar to sonamarg",
            "dayActivity": " Exploring Sonamarg",
            "return": true
          },
          {
            "day": "Srinagar to Pahalgam",
            "dayActivity": " Exploring Betaab, Aru Chandanwari",
            "return": true
          },
          {
            "day": "Srinagar to Gulmarg",
            "dayActivity": "Exploring Gulmarg",
            "return": true
          },
          {
            "day": "Srinagar to Airport",
            "dayActivity": "Leaving with beautiful Memories",
            "return": true
          },
        ],
        inclusions: ["5 Night accomdation", "aily breakfast and dinner", "pick and drop", "1 shikara ride"]
      },
      {
        id: 3,
        name: "Kashmir Bliss",
        price: "73500",
        image: "https://kashmirtravelportal.com/wp-content/uploads/2024/07/vv0ff4eozai.jpg",
        description: "Immerse yourself in the tranquil beauty of Ladakh",
        days: 6,
        nights: 5,
        destinations: ["srinagar", "sonamarg", "pahalgam", "gulmarg"],
        rating: 8,
        packBadge: 'POPULAR',
        activities: [
          {
            "day": "Airport to Srinagar",
            "dayActivity": "Site Seeing"

          },
          {
            "day": "Srinagar to Gulmarg",
            "dayActivity": " Exploring Gulmarg",
            "return": true
          },
          {
            "day": "Srinagar to Pahalgam",
            "dayActivity": " Exploring Betaab, Aru Chandanwari",
            "return": false
          },
          {
            "day": "Pahalgam to Srinagar",
            "dayActivity": " Back to Srinagar",
            "return": true
          },

          {
            "day": "Srinagar to Sonamarg",
            "dayActivity": "Exploring Gulmarg",
            "return": false
          },
          {
            "day": "Srinagar to Airport",
            "dayActivity": "Leaving with beautiful Memories",
            "return": true
          },
        ],
        inclusions: ["5 Night accomdation", "aily breakfast and dinner", "pick and drop", "1 shikara ride"]
      },
      {
        id: 4,
        name: "Kashmir Together",
        price: "63000",
        image: "https://kashmirtravelportal.com/wp-content/uploads/2023/11/4gyueebwdwo.jpg",
        description: "Romantic getaway amidst breathtaking natural beauty.",
        days: 5,
        nights: 4,
        destinations: ["srinagar", "sonamarg", "pahalgam", "gulmarg"],
        rating: 9,
        packBadge: 'TRENDING',
        activities: [
          {
            "day": "Airport to Srinagar",
            "dayActivity": "Site Seeing",
            "return": true
          },
          {
            "day": "Srinagar to Sonamarg",
            "dayActivity": " Exploring Sonamarg",
            "return": true,
          },
          {
            "day": "Srinagar to Gulmarg",
            "dayActivity": "Exploring Gulmarg",
            "return": true
          },
          {
            "day": "Srinagar to Pahalgam",
            "dayActivity": "Exploring Betaab",
            "return": false
          },
          {
            "day": "Pahalgam to Airport",
            "dayActivity": "Leaving with beautiful Memories"
          },
        ],
        inclusions: ["4 Night accomdation", "aily breakfast and dinner", "pick and drop", "1 shikara ride"]
      },

      {
        id: 5,
        name: "Honeymoon Haven Kashmir",
        price: "88000",
        image: "https://kashmirtravelportal.com/wp-content/uploads/2023/11/4gyueebwdwo.jpg",
        description: "Himalayan Bliss for Romantic Souls",
        days: 7,
        nights: 6,
        destinations: ["srinagar", "sonamarg", "pahalgam", "Chandanwari", "gulmarg"],
        rating: 8,
        packBadge: 'BESTSELLING',
        activities: [
          {
            "day": "Airport to Srinagar",
            "dayActivity": "Site Seeing",
            "return": true
          },
          {
            "day": "Srinagar to sonamarg",
            "dayActivity": " Exploring Sonamarg",
            "return": true

          },
          {
            "day": "Srinagar to Pahalgam",
            "dayActivity": " Exploring Betaab",
            "return": true
          },
          {
            "day": "Pahalgam to Chandanwari - Pahalgam",
            "dayActivity": "Exploring Aru , Chandanwari"
          },
          {
            "day": "Pahalgam to Srinagar",
            "dayActivity": "Back to Srinagar",
            "return": true
          },
          {
            "day": "Srinagar to Gulmarg",
            "dayActivity": "Exploring Gulmarg",
            "return": true
          },
          {
            "day": "Srinagar to Airport",
            "dayActivity": "Leaving with beautiful Memories"
          },
        ],
        inclusions: ["6 Night accomdation", "Daily breakfast and Dinner", "pick and drop", "1 shikara ride"]
      },

      {
        id: 6,
        name: "Kashmir Family Adventure",
        price: "105000",
        image: "https://kashmirtravelportal.com/wp-content/uploads/2023/12/11019174-960x636.jpg",
        description: "Embrace the thrill of remote adventures, explore remote destinations.",
        days: 5,
        nights: 4,

        destinations: ["srinagar", "sonamarg", "pahalgam", "gulmarg"],
        rating: 8,
        packBadge: 'BESTSELLING',
        activities: [
          {
            "day": "Airport to Srinagar",
            "dayActivity": "Site Seeing",
            "return": true
          },
          {
            "day": "Srinagar to sonamarg",
            "dayActivity": " Exploring Sonamarg",
            "return": true
          },
          {
            "day": "Srinagar to Gulmarg",
            "dayActivity": "Exploring Gulmarg",
            "return": true
          },
          {
            "day": "Srinagar to Pahalgam",
            "dayActivity": "Exploring Pahalgam",
            "return": true
          },

          {
            "day": "Pahalgam to Airport",
            "dayActivity": "Leaving with beautiful Memories"
          },
        ],
        inclusions: ["4 Night accomdation", "Daily breakfast and dinner", "pick and drop", "1 shikara ride"]
      },

      {
        id: 7,
        name: "Ladakh Adventure Tour",
        price: "137900",
        image: "https://kashmirtravelportal.com/wp-content/uploads/2023/12/11019174-960x636.jpg",
        description: "Embrace the thrill of remote adventures, explore remote destinations.",
        days: 5,
        nights: 4,
        destinations: ["Srinagar", "Kargil", "Ladakh", "Pangong", "Nubra"],
        rating: 8,
        packBadge: 'TRENDING',
        activities: [
          {
            "day": "Airport to Srinagar",
            "dayActivity": "ON ARRIVAL AT SRINAGAR AIRPORT/RAILWAY STATION MEET OR GREET BY OUR REPRESENTATIVE & DRIVE TOWARDS SRINAGAR HOTEL. CHECK INTO THE HOTEL & OVERNIGHT STAY",
            "return": true
          },
          {
            "day": "Srinagar to Kargil",
            "dayActivity": "Morning check out from the hotel & depart for Kargil which is about 205 kilometers from Srinagar. En-route, stop at the valley of meadows Sonmarg for lunch and then cross the Zojila Pass which is located 3900 meter above the sea level. After driving for some time, reach the Drass Village which is said to be the 2nd coldest place on earth after Siberia in Russia. By the evening, you will reach Kargil Town; upon reaching there, check in at the hotel/deluxe camp for overnight stay.",
            "return": false
          },
          {
            "day": "Kargil to Leh Ladakh",
            "dayActivity": "Travelling Leh Ladakh",
            "return": false
          },
          {
            "day": "Ladakh Sight Seeing",
            "dayActivity": "Ladakh is a breathtaking destination known for its stunning landscapes, vibrant culture, and unique experiences. From the crystal-clear waters of Pangong Lake to the majestic monasteries like Thiksey and Hemis, every corner of Ladakh offers a glimpse into its rich heritage.",
            "return": false
          },
          {
            "day": "Ladakh to  Nubra",
            "dayActivity": "Leaving for Nubra Valley, driving across Khardong-la (alt: 18,380 ft). After descending from the pass, drive on for sightseeing of the Sumoor area. Later check into a fixed camp in the same area or drive across to Deskit for an overnight stay in a camp",
            "return": false
          },
          {
            "day": "Exploring Nubra",
            "dayActivity": "Today after an early breakfast you would be driven to Nubra Valley. Enroute visit Khardung-la-pass, the highest motorable road in the world at 18,380ft. Nubra Valley is popularly known as Ldorma or the valley of flowers. It is situated to the north of Ladakh between the Karakoram and Ladakh ranges of the Himalayas. Arrive at Hunder & check in at Hotel/Camps. Later visit Diskit Village & enjoy the Camel ride on sand dunes. Dinner and overnight stay at Hotel/Camp.",
            "return": false
          },
          {
            "day": "Nubra to Pangong",
            "dayActivity": "Today after breakfast, check out from the Hotel & drive to Pangong Lake, east to the Leh after crossing Changla Pass (17500ft) and driving via Durbuk and Tangtse villages in the Changthang region of Ladakh and perhaps one of the most amazing lakes in Asia which changes its color 4 – 5 times a day. Later drive back to Leh for night stay",
            "return": false
          },

          {
            "day": "Camping at Pangong",
            "dayActivity": "Experience the beauty of Pangong Lake with our camping package! Enjoy a scenic drive from Leh to the stunning blue waters of Pangong, where you'll set up camp in comfortable tents. Spend your days exploring the lake, taking leisurely walks along the shore, and soaking in the breathtaking views."
          },

          {
            "day": "Pangong to Leh",
            "dayActivity": "Experience the beauty of Pangong Lake with our camping package! Enjoy a scenic drive from Leh to the stunning blue waters of Pangong, where you'll set up camp in comfortable tents. Spend your days exploring the lake, taking leisurely walks along the shore, and soaking in the breathtaking views."
          },
          {
            "day": "Ladakh to Kargil",
            "dayActivity": "Experience the beauty of Pangong Lake with our camping package! Enjoy a scenic drive from Leh to the stunning blue waters of Pangong, where you'll set up camp in comfortable tents. Spend your days exploring the lake, taking leisurely walks along the shore, and soaking in the breathtaking views."
          },
          {
            "day": "Kargil to Srinagar Airport",
            "dayActivity": "Experience the beauty of Pangong Lake with our camping package! Enjoy a scenic drive from Leh to the stunning blue waters of Pangong, where you'll set up camp in comfortable tents. Spend your days exploring the lake, taking leisurely walks along the shore, and soaking in the breathtaking views."
          },
        ],
        inclusions: ["1 Night At Srinagar", "2 Night At Kargil", "3 Night At Leh", "3 Night At Nubra", "Daily breakfast and dinner", "pick and drop"]
      },
    ]
  }




  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  }
}
