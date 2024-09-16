import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-component',
  standalone: true,
  imports: [],
  templateUrl: './chat-component.component.html',
  styleUrl: './chat-component.component.scss'
})
export class ChatComponentComponent {
  chatIconUrl = 'https://www.logo.wine/a/logo/WhatsApp/WhatsApp-Logo.wine.svg';

  openWhatsapp = () => {
    const Message = "Can't wait to explore travel packages with you! ✨";
    window.open(`https://wa.me/+919596354066?text=${Message}`, "_blank");
  };
}
