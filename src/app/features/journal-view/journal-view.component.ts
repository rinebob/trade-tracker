import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tt-journal-view',
  standalone: true,
  imports: [],
  templateUrl: './journal-view.component.html',
  styleUrl: './journal-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalViewComponent {

}
