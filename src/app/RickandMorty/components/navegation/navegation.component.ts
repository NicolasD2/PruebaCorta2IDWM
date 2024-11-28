import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css'],
  standalone: true,
})
export class NavegationComponent {
  @Input() prev!: string | null;
  @Input() next!: string | null;
  @Output() onNavigate = new EventEmitter<number>();

  navigate(direction: number) {
    this.onNavigate.emit(direction);
  }
}
