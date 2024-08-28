import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tt-trades-view',
  standalone: true,
  imports: [],
  templateUrl: './trades-view.component.html',
  styleUrl: './trades-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradesViewComponent {

}
