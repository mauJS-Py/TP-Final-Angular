import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-am-marmol-section',
  imports: [],
  templateUrl: './logo-am-marmol-section.html',
  styleUrl: './logo-am-marmol-section.css'
})
export class LogoAmMarmolSection {
  @Input() section : string = "";
}
