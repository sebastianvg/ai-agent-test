import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-devices',
  imports: [],
  templateUrl: './devices.html',
  styleUrl: './devices.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Devices {}
