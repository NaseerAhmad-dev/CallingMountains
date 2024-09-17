import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  public packSelected: BehaviorSubject<any> = new BehaviorSubject<any>(0);


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
        image: "assets/banner-1.jpg",
        description: "Conquer snow-capped peaks, glacial lakes, and lush valleys.",
        days: 5,
        nights: 4,
        destinations: ["srinagar", "sonamarg", "gulmarg", "pahalgam"],
        rating: 8,
        packBadge: "BESTSELLING",
        activities: [
          {
            "day": "Airport to Srinagar",
            "dayActivity": [
              "A representative will meet you at the prearranged location in Srinagar and provide a brief overview of the entire trip.",
              "After that, a motel in Srinagar will be where you are taken.",
              "Finish the check-in procedures, take some time to relax, and then go exploring Srinagar.",
              "Check out the Shalimar Bagh and Nishat Bagh, two of the most well-known Mughal Gardens (abode of love).",
              "The Zabarwan hills can be seen in the distance as these gardens encircle Dal Lake's eastern side for several kilometres.",
              "Spend some time by the lake in the evening and look around the neighbourhood."
            ]
          },
          {
            "day": "Srinagar to sonamarg",
            "dayActivity": [
              "The hotel's delicious brunch is served each morning with a stunning view of Dal Lake.",
              "Prepare yourself for the ultimate journey to Sonamarg after breakfast.",
              "Set out on a full-day trip to the lovely Sonmarg 'meadow of gold.'",
              "Stop at picturesque locations along the way to Sonamarg to take in the scenery and the surrounding natural beauty.",
              "When you get to Sonamarg, you can take a horse to the Thajiwas Glacier, where snow is present all year long.",
              "In Sonamarg, you can also take part in the most well-liked sports activities, like white water kayaking.",
              "Drive back to your accommodation in Srinagar after finishing your exploration of Sonamarg.",
              "Enjoy a night's sleep and supper at the Srinagar hotel."
            ]
          },
          {
            "day": "Srinagar to Pahalgam",
            "dayActivity": [
              "Enjoy a delicious breakfast while taking in the stunning view of the snow-capped mountains before checking out of the hotel.",
              "You will then continue on to Pahalgam, also known as the shepherds' region.",
              "Once you arrive in Pahalgam, settle into your hotel and take some time to unwind before travelling to the lovely Aru Valley.",
              "A small hamlet called Aru Valley is renowned for its scenic beauty and offers a variety of adventurous activities.",
              "The Betaab Valley, one of the most well-known tourist locations that offers breathtaking views of the Lidder River while being surrounded by heavenly natural charm, should then be reached.",
              "Additionally, Chandanwari, which is known for its snow bridge and serves as the beginning point of the revered Amarnath Yatra, will be on your itinerary.",
              "Return to the hotel in Pahalgam and call it a day after a day filled with breathtaking sightseeing and exhilarating experiences."
            ]
          },
          {
            "day": "Srinagar to Gulmarg",
            "dayActivity": [
              "Start your day early with a hearty breakfast, then set off on a scenic drive from Srinagar to Gulmarg.",
              "Upon reaching Gulmarg, your main activity will be the Gondola Ride, offering stunning panoramic views of the snow-covered mountains.",
              "As the cable car rises, enjoy the sweeping vistas of the valley below, revealing the hidden beauty of nature.",
              "Before heading back to Srinagar, take advantage of Gulmarg’s famous ski slopes and try your hand at adventure sports like skiing and paragliding.",
              "On the return journey, savor the natural beauty and snow-capped mountains that have accompanied you throughout the day.",
              "Enjoy dinner and an overnight stay at a hotel in Srinagar."
            ]
          },
          {
            "day": "Srinagar to Airport",
            "dayActivity": [
              "Begin your day with a satisfying breakfast, taking in the breathtaking view of the snow-capped mountains before checking out of the houseboat.",
              "The tour concludes as you are dropped off at a preferred location in Srinagar."
            ]
          },
        ],
        "inclusions": [
          "A cosy and hygienic car (Innova/Xylo, or a comparable model) for sightseeing on each of the days specified in the schedule.",
          "According to the timing of your journey, airport pickup and drop-off.",
          "Stay in clean, well-maintained lodgings with double and triple occupancy.",
          "Food included, per the schedule.",
          "Professional chauffeur cum guide.",
          "Sightseeing as per the schedule."
        ]
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
            "dayActivity": [
              "A representative will meet you at the prearranged location in Srinagar and provide a brief overview of the entire trip.",
              "After that, a motel in Srinagar will be where you are taken.",
              "Finish the check-in procedures, take some time to relax, and then go exploring Srinagar.",
              "Check out the Shalimar Bagh and Nishat Bagh, two of the most well-known Mughal Gardens (abode of love).",
              "The Zabarwan hills can be seen in the distance as these gardens encircle Dal Lake's eastern side for several kilometres.",
              "Spend some time by the lake in the evening and look around the neighbourhood."
            ]
          },
          {
            "day": "Srinagar to sonamarg",
            "dayActivity": [
              "The hotel's delicious brunch is served each morning with a stunning view of Dal Lake.",
              "Prepare yourself for the ultimate journey to Sonamarg after breakfast.",
              "Set out on a full-day trip to the lovely Sonmarg 'meadow of gold.'",
              "Stop at picturesque locations along the way to Sonamarg to take in the scenery and the surrounding natural beauty.",
              "When you get to Sonamarg, you can take a horse to the Thajiwas Glacier, where snow is present all year long.",
              "In Sonamarg, you can also take part in the most well-liked sports activities, like white water kayaking.",
              "Drive back to your accommodation in Srinagar after finishing your exploration of Sonamarg.",
              "Enjoy a night's sleep and supper at the Srinagar hotel."
            ]
          },
          {
            "day": "Srinagar to Pahalgam",
            "dayActivity": [
              "Enjoy a delicious breakfast while taking in the stunning view of the snow-capped mountains before checking out of the hotel.",
              "You will then continue on to Pahalgam, also known as the shepherds' region.",
              "Once you arrive in Pahalgam, settle into your hotel and take some time to unwind before travelling to the lovely Aru Valley.",
              "A small hamlet called Aru Valley is renowned for its scenic beauty and offers a variety of adventurous activities.",
              "The Betaab Valley, one of the most well-known tourist locations that offers breathtaking views of the Lidder River while being surrounded by heavenly natural charm, should then be reached.",
              "Additionally, Chandanwari, which is known for its snow bridge and serves as the beginning point of the revered Amarnath Yatra, will be on your itinerary.",
              "Return to the hotel in Pahalgam and call it a day after a day filled with breathtaking sightseeing and exhilarating experiences."
            ]
          },
          {
            "day": "Srinagar to Gulmarg",
            "dayActivity": [
              "Start your day early with a hearty breakfast, then set off on a scenic drive from Srinagar to Gulmarg.",
              "Upon reaching Gulmarg, your main activity will be the Gondola Ride, offering stunning panoramic views of the snow-covered mountains.",
              "As the cable car rises, enjoy the sweeping vistas of the valley below, revealing the hidden beauty of nature.",
              "Before heading back to Srinagar, take advantage of Gulmarg’s famous ski slopes and try your hand at adventure sports like skiing and paragliding.",
              "On the return journey, savor the natural beauty and snow-capped mountains that have accompanied you throughout the day.",
              "Enjoy dinner and an overnight stay at a hotel in Srinagar."
            ]
          },
          {
            "day": "Srinagar to Airport",
            "dayActivity": [
              "Begin your day with a satisfying breakfast, taking in the breathtaking view of the snow-capped mountains before checking out of the houseboat.",
              "The tour concludes as you are dropped off at a preferred location in Srinagar."
            ]
          },
        ],
        "inclusions": [
          "A cosy and hygienic car (Innova/Xylo, or a comparable model) for sightseeing on each of the days specified in the schedule.",
          "According to the timing of your journey, airport pickup and drop-off.",
          "Stay in clean, well-maintained lodgings with double and triple occupancy.",
          "Food included, per the schedule.",
          "Professional chauffeur cum guide.",
          "Sightseeing as per the schedule."
        ]
      },
      {
        id: 3,
        name: "Kashmir Bliss",
        price: "73500",
        image: "assets/banner-2.jpg",
        description: "Immerse yourself in the tranquil beauty of Ladakh",
        days: 6,
        nights: 5,
        destinations: ["srinagar", "sonamarg", "pahalgam", "gulmarg"],
        rating: 8,
        packBadge: 'POPULAR',
        activities: [
          {
              "day": "Airport to Srinagar",
              "dayActivity": "Check-in to your hotel in Srinagar and visit the iconic Dal Lake for a Shikara ride. Explore the Mughal Gardens like Shalimar Bagh, Nishat Bagh, and Chashme Shahi. Enjoy local Kashmiri cuisine for dinner."
          },
          {
              "day": "Srinagar to Gulmarg",
              "dayActivity": "Travel to Gulmarg, known for its stunning meadows and adventure activities. Enjoy a cable car ride on the Gulmarg Gondola to see panoramic views. Explore the local market and visit the historic St. Mary's Church. Return to Srinagar in the evening."
          },
          {
              "day": "Srinagar to Pahalgam",
              "dayActivity": "Drive to Pahalgam and visit Betaab Valley, renowned for its lush green meadows and scenic beauty. Proceed to Aru Valley, which offers breathtaking views and opportunities for trekking. Visit Chandanwari, the starting point of the Amarnath Yatra pilgrimage. Overnight stay in Pahalgam."
          },
          {
              "day": "Pahalgam to Srinagar",
              "dayActivity": "Return to Srinagar and explore local markets like Lal Chowk for shopping. Visit the famous Hazratbal Shrine and Shankaracharya Temple for a cultural experience. Enjoy a leisurely walk along the Boulevard Road by Dal Lake. Overnight stay in Srinagar."
          },
          {
              "day": "Srinagar to Sonamarg",
              "dayActivity": "Travel to Sonamarg, known as the 'Meadow of Gold'. Explore the Thajiwas Glacier or enjoy a pony ride. Visit the local trout fish farms and enjoy a picnic by the Sindh River. Stay overnight in Sonamarg or return to Srinagar depending on your schedule."
          },
          {
              "day": "Srinagar to Airport",
              "dayActivity": "Spend your last morning in Srinagar shopping for souvenirs and enjoying a final stroll by Dal Lake. Depart for the airport with beautiful memories of the Kashmir Valley."
          }
        ],      

        "inclusions": [
          "A cosy and hygienic car (Innova/Xylo, or a comparable model) for sightseeing on each of the days specified in the schedule.",
          "According to the timing of your journey, airport pickup and drop-off.",
          "Stay in clean, well-maintained lodgings with double and triple occupancy.",
          "Food included, per the schedule.",
          "Professional chauffeur cum guide.",
          "Sightseeing as per the schedule."
        ]
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
              "dayActivity": [
                  "Meet your tour representative at the prearranged spot for a brief overview of your journey.",
                  "Transfer to your hotel in Srinagar and check in.",
                  "Relax and unwind after your journey.",
                  "Enjoy the rest of the day exploring the area around your hotel or browse the local markets for souvenirs.",
                  "Overnight stay in Srinagar."
              ],
              "return": true
          },
          {
              "day": "Srinagar to Sonamarg",
              "dayActivity": [
                  "Start your day with a delicious brunch at the hotel, featuring stunning views of Dal Lake.",
                  "Embark on a scenic drive to Sonamarg, the 'Meadow of Gold'.",
                  "Stop at picturesque spots along the way to soak in the natural beauty.",
                  "Arrive in Sonamarg and take a horse ride to the Thajiwas Glacier, where snow is present year-round.",
                  "Enjoy popular adventure activities in Sonamarg, such as white-water kayaking.",
                  "Return to your hotel in Srinagar for dinner and an overnight stay."
              ],
              "return": true
          },
          {
              "day": "Srinagar to Gulmarg",
              "dayActivity": [
                  "Early morning departure from Srinagar to Gulmarg, traveling along a picturesque route.",
                  "Experience the famous Gondola Ride in Gulmarg, offering breathtaking panoramic views of snow-capped mountains.",
                  "Enjoy the scenic beauty as you ascend in the cable car, and discover nature's hidden wonders.",
                  "Participate in adventure sports like skiing and paragliding, renowned in Gulmarg.",
                  "Return to Srinagar in the evening, taking in the beauty of the snow-capped mountains along the way.",
                  "Dinner and overnight stay at your Srinagar hotel."
              ],
              "return": true
          },
          {
              "day": "Srinagar to Pahalgam",
              "dayActivity": [
                  "After a delightful breakfast with views of snow-capped peaks, check out from your Srinagar hotel.",
                  "Travel to Pahalgam, the shepherds' region, and check in to your hotel upon arrival.",
                  "Explore the scenic beauty of Aru Valley, a picturesque village offering various adventure activities.",
                  "Visit Betaab Valley for stunning views of the Lidder River and its surrounding natural beauty.",
                  "Explore Chandanwari, known for its snow bridge and as the starting point of the Amarnath Yatra pilgrimage.",
                  "Return to your Pahalgam hotel for an overnight stay after a day of spectacular sightseeing and adventure."
              ],
              "return": false
          },
          {
              "day": "Pahalgam to Airport",
              "dayActivity": [
                  "Enjoy a hearty breakfast with a final view of the snow-capped mountains.",
                  "Check out from your hotel and proceed to the airport.",
                  "End of tour."
              ],
              "return": true
          }
      ],
      
        "inclusions": [
          "A cosy and hygienic car (Innova/Xylo, or a comparable model) for sightseeing on each of the days specified in the schedule.",
          "According to the timing of your journey, airport pickup and drop-off.",
          "Stay in clean, well-maintained lodgings with double and triple occupancy.",
          "Food included, per the schedule.",
          "Professional chauffeur cum guide.",
          "Sightseeing as per the schedule."
        ]
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
              "dayActivity": [
                  "Arrive in Srinagar and meet your tour representative.",
                  "Transfer to your hotel and check in.",
                  "Relax and unwind after your journey.",
                  "Explore the local surroundings or visit nearby markets for souvenirs.",
                  "Enjoy an overnight stay in Srinagar."
              ],
              "return": true
          },
          {
              "day": "Srinagar to Sonamarg",
              "dayActivity": [
                  "Begin your day with a hearty breakfast at the hotel.",
                  "Drive to Sonamarg, the 'Meadow of Gold'.",
                  "Enjoy breathtaking views and scenic stops along the way.",
                  "Take a horse ride to the Thajiwas Glacier, known for its year-round snow.",
                  "Participate in adventure activities like white-water kayaking.",
                  "Return to Srinagar for dinner and an overnight stay at your hotel."
              ],
              "return": true
          },
          {
              "day": "Srinagar to Pahalgam",
              "dayActivity": [
                  "After breakfast, check out from your Srinagar hotel.",
                  "Travel to Pahalgam, renowned for its natural beauty.",
                  "Explore Betaab Valley, famous for its stunning landscapes and views of the Lidder River.",
                  "Check in to your hotel in Pahalgam and relax.",
                  "Enjoy the rest of the day at leisure, exploring local attractions."
              ],
              "return": true
          },
          {
              "day": "Pahalgam to Chandanwari - Pahalgam",
              "dayActivity": [
                  "Set out for a day trip to Chandanwari and Aru Valley.",
                  "Discover the scenic beauty of Aru Valley with its lush meadows and adventure options.",
                  "Visit Chandanwari, known for its snow bridge and as the start of the Amarnath Yatra.",
                  "Return to Pahalgam and spend the night at your hotel."
              ]
          },
          {
              "day": "Pahalgam to Srinagar",
              "dayActivity": [
                  "Enjoy breakfast at your Pahalgam hotel.",
                  "Drive back to Srinagar and check into your hotel.",
                  "Spend the day exploring Srinagar at your leisure, perhaps visiting local markets or attractions.",
                  "Overnight stay in Srinagar."
              ],
              "return": true
          },
          {
              "day": "Srinagar to Gulmarg",
              "dayActivity": [
                  "Depart early from Srinagar to Gulmarg.",
                  "Experience the famous Gondola Ride offering panoramic views of the snow-capped mountains.",
                  "Engage in adventure sports such as skiing or paragliding.",
                  "Return to Srinagar in the evening for dinner and an overnight stay at your hotel."
              ],
              "return": true
          },
          {
              "day": "Srinagar to Airport",
              "dayActivity": [
                  "Enjoy your final breakfast in Srinagar with views of the stunning surroundings.",
                  "Check out from your hotel and head to the airport.",
                  "Depart with beautiful memories of your Kashmir trip."
              ]
          }
      ],      
        "inclusions": [
          "A cosy and hygienic car (Innova/Xylo, or a comparable model) for sightseeing on each of the days specified in the schedule.",
          "According to the timing of your journey, airport pickup and drop-off.",
          "Stay in clean, well-maintained lodgings with double and triple occupancy.",
          "Food included, per the schedule.",
          "Professional chauffeur cum guide.",
          "Sightseeing as per the schedule."
        ],
      },

      {
        "id": 6,
        "name": "Kashmir Family Adventure",
        "price": "105000",
        "image": "https://kashmirtravelportal.com/wp-content/uploads/2023/12/11019174-960x636.jpg",
        "description": "Embrace the thrill of remote adventures and explore scenic destinations in Kashmir with your family.",
        "days": 5,
        "nights": 4,
        "destinations": ["srinagar", "sonamarg", "pahalgam", "gulmarg"],
        "rating": 8,
        "packBadge": "BESTSELLING",
        "activities": [
            {
                "day": "Airport to Srinagar",
                "dayActivity": [
                    "Arrive at Srinagar Airport, where you'll be warmly greeted by our representative.",
                    "Transfer to your hotel and check in.",
                    "Relax after your journey and enjoy a leisurely afternoon exploring the local surroundings.",
                    "Visit Dal Lake for a serene Shikara ride or explore the Mughal Gardens, including Shalimar Bagh and Nishat Bagh.",
                    "Overnight stay at the Srinagar hotel."
                ],
                "return": true
            },
            {
                "day": "Srinagar to Sonamarg",
                "dayActivity": [
                    "Start your day with a hearty breakfast at the hotel.",
                    "Drive to Sonamarg, known as the 'Meadow of Gold'.",
                    "En route, enjoy the stunning views and scenic stops.",
                    "In Sonamarg, take a horse ride to the Thajiwas Glacier or explore the beautiful meadows.",
                    "Return to Srinagar in the evening for dinner and an overnight stay."
                ],
                "return": true
            },
            {
                "day": "Srinagar to Gulmarg",
                "dayActivity": [
                    "After breakfast, drive from Srinagar to Gulmarg, renowned for its lush meadows and adventure activities.",
                    "Experience the Gulmarg Gondola ride for breathtaking views of the Himalayas.",
                    "Explore Gulmarg’s famous golf course or enjoy activities such as skiing or paragliding (seasonal).",
                    "Return to Srinagar in the evening for an overnight stay at the hotel."
                ],
                "return": true
            },
            {
                "day": "Srinagar to Pahalgam",
                "dayActivity": [
                    "Check out from your Srinagar hotel after breakfast and drive to Pahalgam.",
                    "On arrival, check into your hotel and unwind.",
                    "Explore Betaab Valley, known for its stunning landscapes and the Lidder River.",
                    "Visit Aru Valley for a peaceful retreat or adventurous activities like trekking.",
                    "Return to Srinagar for your final night, enjoying dinner and a restful stay."
                ],
                "return": true
            },
            {
                "day": "Pahalgam to Airport",
                "dayActivity": [
                    "Enjoy a final breakfast in Pahalgam with views of the picturesque surroundings.",
                    "Check out from your hotel and transfer to Srinagar Airport.",
                    "Depart with cherished memories of your Kashmir adventure."
                ]
            }
        ],
        "inclusions": [
          "A cosy and hygienic car (Innova/Xylo, or a comparable model) for sightseeing on each of the days specified in the schedule.",
          "According to the timing of your journey, airport pickup and drop-off.",
          "Stay in clean, well-maintained lodgings with double and triple occupancy.",
          "Food included, per the schedule.",
          "Professional chauffeur cum guide.",
          "Sightseeing as per the schedule."
        ]
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
              "dayActivity": [
                  "On arrival at Srinagar Airport/Railway Station, you will be greeted by our representative.",
                  "Drive to your hotel in Srinagar and check in.",
                  "Relax and unwind after your journey.",
                  "Overnight stay at the Srinagar hotel."
              ],
              "return": true
          },
          {
              "day": "Srinagar to Kargil",
              "dayActivity": [
                  "Morning check-out from the hotel in Srinagar.",
                  "Depart for Kargil, approximately 205 kilometers away.",
                  "Stop for lunch at Sonmarg, the 'Meadow of Gold'.",
                  "Cross the Zojila Pass, situated at 3,900 meters above sea level.",
                  "Pass through Drass Village, known as the second coldest inhabited place on earth.",
                  "Arrive in Kargil by evening and check in at your hotel or deluxe camp for an overnight stay."
              ],
              "return": false
          },
          {
              "day": "Kargil to Leh Ladakh",
              "dayActivity": [
                  "Drive from Kargil to Leh, enjoying scenic views along the way.",
                  "Explore the picturesque landscapes and vibrant culture of Ladakh.",
                  "Check in at your Leh hotel for an overnight stay."
              ],
              "return": false
          },
          {
              "day": "Ladakh Sightseeing",
              "dayActivity": [
                  "Explore the breathtaking landscapes of Ladakh.",
                  "Visit the crystal-clear Pangong Lake, renowned for its stunning colors.",
                  "Tour majestic monasteries such as Thiksey and Hemis, which offer a glimpse into Ladakh’s rich heritage.",
                  "Experience the unique local culture and serene environment of Ladakh."
              ],
              "return": false
          },
          {
              "day": "Ladakh to Nubra",
              "dayActivity": [
                  "Travel to Nubra Valley, crossing the Khardung La Pass, one of the highest motorable roads in the world at 18,380 feet.",
                  "Descend into Nubra Valley and explore the Sumoor area.",
                  "Check in at a fixed camp in Nubra or drive to Deskit for an overnight stay."
              ],
              "return": false
          },
          {
              "day": "Exploring Nubra",
              "dayActivity": [
                  "After an early breakfast, head out to explore Nubra Valley.",
                  "Visit Khardung La Pass for panoramic views and photo opportunities.",
                  "Explore Hunder, known for its sand dunes and camel rides.",
                  "Visit Diskit Village and enjoy a camel ride on the sand dunes.",
                  "Overnight stay at your Hotel/Camp in Nubra."
              ],
              "return": false
          },
          {
              "day": "Nubra to Pangong",
              "dayActivity": [
                  "Check out from your Nubra accommodation and drive to Pangong Lake.",
                  "Cross the Chang La Pass (17,500 feet) and travel via Durbuk and Tangtse villages.",
                  "Arrive at Pangong Lake, known for its spectacular color changes throughout the day.",
                  "Drive back to Leh for an overnight stay."
              ],
              "return": false
          },
          {
              "day": "Camping at Pangong",
              "dayActivity": [
                  "Experience the beauty of Pangong Lake with a camping stay.",
                  "Set up camp in comfortable tents by the lake.",
                  "Explore the lake, take leisurely walks along the shore, and enjoy the stunning views."
              ]
          },
          {
              "day": "Pangong to Leh",
              "dayActivity": [
                  "Enjoy breakfast at your camp in Pangong Lake.",
                  "Drive back to Leh, enjoying the scenic journey.",
                  "Check in at your Leh hotel and spend the day at leisure, exploring local markets or relaxing."
              ]
          },
          {
              "day": "Leh to Kargil",
              "dayActivity": [
                  "Check out from your Leh hotel and drive back to Kargil.",
                  "Enjoy the scenic views and landmarks along the route.",
                  "Arrive in Kargil and check in at your hotel or deluxe camp for an overnight stay."
              ]
          },
          {
              "day": "Kargil to Srinagar Airport",
              "dayActivity": [
                  "Check out from your Kargil accommodation.",
                  "Drive back to Srinagar.",
                  "Transfer to Srinagar Airport for your departure.",
                  "Depart with wonderful memories of your Ladakh adventure."
              ]
          }
      ],
      "inclusions": [
          "A cosy and hygienic car (Innova/Xylo, or a comparable model) for sightseeing on each of the days specified in the schedule.",
          "According to the timing of your journey, airport pickup and drop-off.",
          "Stay in clean, well-maintained lodgings with double and triple occupancy.",
          "1 Night At Srinagar",
          "2 Night At Kargil",
          "3 Night At Leh",
          "Daily breakfast and dinner"

        ]
      
        // inclusions: ["1 Night At Srinagar", "2 Night At Kargil", "3 Night At Leh", "3 Night At Nubra", "Daily breakfast and dinner", "pick and drop"]
      },
    ]
  }
  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  }

  getContactFormData() {
    return [
      {
        "control_type": 'text',
        "control_name": "name",
        "control_label": "Name",
        "placeholder": 'Your Name',
        "validation_rule": [
          {
            "mandation": {
              "error": "please supply a value",
              "is_mandatory": true
            }
          },
          {
            "min": {
              "error": "cannot be less than 1 character",
              "column_minlength": "1"
            }
          },
          {
            "max": {
              "error": "cannot exceed 255 characters",
              "column_maxlength": "255"
            }
          }
        ],
      },
      {
        "control_type": 'number',
        "control_name": "phone",
        "control_label": "Mobile Number",
        "placeholder": 'Mobile Number',
        "validation_rule": [
          {
            "mandation": {
              "error": "please supply a value",
              "is_mandatory": true
            }
          },
          {
            "min": {
              "error": "cannot be less than 1 character",
              "column_minlength": "1"
            }
          },
          {
            "max": {
              "error": "cannot exceed 255 characters",
              "column_maxlength": "255"
            }
          },
          {
            "phone": {
              'validation':true
            }
          }
        ],
      },
      {
        "control_type": 'email',
        "control_name": "email",
        "control_label": "Email",
        "placeholder": 'Your Email ID',
        "validation_rule": [
          {
            "mandation": {
              "error": "please supply a value",
              "is_mandatory": true
            }
          },
          {
            "min": {
              "error": "cannot be less than 1 character",
              "column_minlength": "1"
            }
          },
          {
            "max": {
              "error": "cannot exceed 255 characters",
              "column_maxlength": "255"
            }
          },
          {
            "email": {
              'validation':true
            }
          }
        ],
      },
      {
        "control_type": 'textarea',
        "control_name": "message",
        "control_label": "Your Message",
        "placeholder": 'Your Email ID',
        "validation_rule": [
          {
            "mandation": {
              "error": "please supply a value",
              "is_mandatory": true
            }
          },
          {
            "min": {
              "error": "cannot be less than 1 character",
              "column_minlength": "1"
            }
          },
          {
            "max": {
              "error": "cannot exceed 255 characters",
              "column_maxlength": "255"
            }
          }
        ],
      },
    ]
  }
}
