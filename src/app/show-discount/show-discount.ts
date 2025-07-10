import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-discount',
  imports: [],
  templateUrl: './show-discount.html',
  styleUrl: './show-discount.css'
})
export class ShowDiscount {
  @Input() oferta: number = 0
}
