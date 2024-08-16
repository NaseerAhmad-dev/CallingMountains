import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  constructor() { }
  private data: any;

  setData(data: any) {
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
            price:  62999,
            image: "https://kashmirtravelportal.com/wp-content/uploads/2024/07/vkkg9xouczi.jpg",
            description: "Conquer snow-capped peaks, glacial lakes, and lush valleys.",
            days: 5,
            nights: 4,
            destinations: ["srinagar","sonamarg","pahalgam","gulmarg"],
            rating:8,
            packBadge:"BESTSELLING",
            activities: [
              {
                "day": "Airport to Srinagar",
                "dayActivity": "Site Seeing"
              },
              {
                "day": "Srinagar to sonamarg",
                "dayActivity": " Exploring Sonamarg"
              },
              {
                "day": "Srinagar to Pahalgam",
                "dayActivity": " Exploring Betaab, Aru Chandanwari"
              },
              {
                "day": "Srinagar to Gulmarg",
                "dayActivity": "Exploring Gulmarg"
              },
              {
                "day": "Srinagar to Airport",
                "dayActivity": "Leaving with beautiful Memories"
              },
            ],
            inclusions :["4 Night accomdation", "aily breakfast and dinner", "pick and drop", "all taxes" , "1 shikara ride"]
          },


          {
            id: 1,
            name: "Solo Trip to Kashmir",
            price:  62999,
            image: "https://kashmirtravelportal.com/wp-content/uploads/2024/07/vkkg9xouczi.jpg",
            description: "Conquer snow-capped peaks, glacial lakes, and lush valleys.",
            days: 5,
            nights: 4,
            destinations: ["srinagar","sonamarg","pahalgam","gulmarg"],
            rating:8,
            packBadge: 'TRENDING',
            activities: [
              {
                "day": "Airport to Srinagar",
                "dayActivity": "Site Seeing"
              },
              {
                "day": "Srinagar to sonamarg",
                "dayActivity": " Exploring Sonamarg"
              },
              {
                "day": "Srinagar to Pahalgam",
                "dayActivity": " Exploring Betaab, Aru Chandanwari"
              },
              {
                "day": "Srinagar to Gulmarg",
                "dayActivity": "Exploring Gulmarg"
              },
              {
                "day": "Srinagar to Airport",
                "dayActivity": "Leaving with beautiful Memories"
              },
            ],
            inclusions :["4 Night accomdation", "aily breakfast and dinner", "pick and drop", "all taxes" , "1 shikara ride"]
          },
          {
            id: 1,
            name: "Solo Trip to Kashmir",
            price:  62999,
            image: "https://kashmirtravelportal.com/wp-content/uploads/2024/07/vkkg9xouczi.jpg",
            description: "Conquer snow-capped peaks, glacial lakes, and lush valleys.",
            days: 5,
            nights: 4,
            destinations: ["srinagar","sonamarg","pahalgam","gulmarg"],
            rating:8,
            packBadge:'POPULAR',
            activities: [
              {
                "day": "Airport to Srinagar",
                "dayActivity": "Site Seeing"
              },
              {
                "day": "Srinagar to sonamarg",
                "dayActivity": " Exploring Sonamarg"
              },
              {
                "day": "Srinagar to Pahalgam",
                "dayActivity": " Exploring Betaab, Aru Chandanwari"
              },
              {
                "day": "Srinagar to Gulmarg",
                "dayActivity": "Exploring Gulmarg"
              },
              {
                "day": "Srinagar to Airport",
                "dayActivity": "Leaving with beautiful Memories"
              },
            ],
            inclusions :["4 Night accomdation", "aily breakfast and dinner", "pick and drop", "all taxes" , "1 shikara ride"]
          },
          {
            id: 1,
            name: "Solo Trip to Kashmir",
            price:  62999,
            image: "https://kashmirtravelportal.com/wp-content/uploads/2024/07/vkkg9xouczi.jpg",
            description: "Conquer snow-capped peaks, glacial lakes, and lush valleys.",
            days: 5,
            nights: 4,
            
            destinations: ["srinagar","sonamarg","pahalgam","gulmarg"],
            rating:8,
            packBadge:'POPULAR',
            activities: [
              {
                "day": "Airport to Srinagar",
                "dayActivity": "Site Seeing"
              },
              {
                "day": "Srinagar to sonamarg",
                "dayActivity": " Exploring Sonamarg"
              },
              {
                "day": "Srinagar to Pahalgam",
                "dayActivity": " Exploring Betaab, Aru Chandanwari"
              },
              {
                "day": "Srinagar to Gulmarg",
                "dayActivity": "Exploring Gulmarg"
              },
              {
                "day": "Srinagar to Airport",
                "dayActivity": "Leaving with beautiful Memories"
              },
            ],
            inclusions :["4 Night accomdation", "aily breakfast and dinner", "pick and drop", "all taxes" , "1 shikara ride"]
          },

    ];
}




getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
}
}
