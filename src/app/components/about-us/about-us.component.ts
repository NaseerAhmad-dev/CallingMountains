import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ChipModule } from 'primeng/chip';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [DividerModule, RouterModule, CardModule, CommonModule, ChipModule,BreadcrumbModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {


  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

    ngOnInit() {
        this.items = [{ label: 'About Us' }];
        this.home = { icon: 'pi pi-home', routerLink: '/'  };
    }
    
  aboutUsData: any = [
    {
      'title': 'Welcome to MagicalMountains!',
      'description': `At MagicalMountains, we believe that true adventure begins where the ordinary ends.
                    Nestled amidst the awe-inspiring landscapes of Kashmir, we are a premier travel
                    agency dedicated to crafting unforgettable experiences that celebrate the natural
                    splendor and cultural richness of this stunning region. Whether you're drawn to the serenity of
                    the mountains, the thrill of exploration, or the warmth of local traditions, we offer a range of
                    meticulously designed travel packages to make your journey truly magical.`
    },
    {
      'title': 'Our Story',
      'description': `Our story is one of passion and discovery. Founded with a deep love for the
                        enchanting beauty of Kashmir, MagicalMountains emerged from a vision to offer travelers
                        more than just trips—our goal is to provide transformative experiences. With years of expertise
                        in the travel industry and a profound connection to the local culture, we create unique itineraries
                        that cater to every type of traveler, from serene nature enthusiasts to adventurous explorers.`
    },
    {
      'title': 'Our Mission',
      'description': `Our mission is to transform your travel dreams into reality by delivering exceptional,
      personalized experiences that capture the essence of Kashmir. We are committed to
      excellence in every detail, ensuring that your journey is not only seamless but also rich with
      authentic encounters and breathtaking moments. Our dedicated team strives to uphold
      the highest standards of service, creating memories that linger long after your adventure ends.`
    }
  ]
  listData: any = [

    {
      'title': 'Why Choose Us?',
      'list': [{ 'listTitle': 'Tailored Itineraries:', 'listDescription': `We specialize in curating personalized travel experiences that reflect your unique interests, whether it's hiking through rugged terrains, relaxing in luxurious retreats, or immersing yourself in local cultures.` },
      { 'listTitle': 'Local Expertise:', 'listDescription': `Our team consists of passionate local guides and travel experts who bring unparalleled knowledge and enthusiasm to every tour, ensuring you experience the best of Kashmir.` },
      { 'listTitle': 'Quality and Comfort:', 'listDescription': ` From luxurious accommodations to authentic culinary experiences, we focus on providing top - notch quality and comfort throughout your journey.` },
      { 'listTitle': 'Sustainable Practices:', 'listDescription': ` We are dedicated to responsible tourism, promoting practices that protect the environment and benefit local communities.` },
      ]
    },
    {
      'title': 'Our Offerings',
      'list': [{
        'listTitle': 'Adventure Tours:', 'listDescription': `Discover the thrill of Kashmir’s natural landscapes with our adventure tours, including
            trekking, mountain biking, and more. Each tour is led by experienced guides who ensure your safety and
            enjoyment.` },
      {
        'listTitle': 'Cultural Experiences:', 'listDescription': `Engage with the rich heritage of Kashmir through immersive cultural tours, showcasing
            local traditions, art, and cuisine.` },
      {
        'listTitle': 'Relaxation Retreats:', 'listDescription': ` Unwind in tranquil mountain settings with our relaxation packages, designed for those
            seeking peace and rejuvenation amidst stunning vistas.` },
      {
        'listTitle': 'Custom Packages:', 'listDescription': ` Let us design a bespoke itinerary that perfectly aligns with your travel preferences,
            ensuring a truly personalized adventure.` },
      ]
    },
  ]

  aboutFooter: any = [

    {
      'title': 'Our Vision',
      'description': `We envision a world where every journey is an opportunity to connect deeply with nature, culture, and
            oneself. At MagicalMountains, our vision is to be the leading travel agency in Kashmir, renowned for our
            innovation, commitment to quality, and ability to craft magical experiences for every traveler.`
    },
    {
      'title': 'Connect with Us',
      'description': `At MagicalMountains, we’re more than just a travel agency; we’re your gateway to extraordinary adventures
            and unforgettable memories. Reach out to us to start planning your next journey and discover the magic of
            Kashmir with us.`
    }
  ]
}

