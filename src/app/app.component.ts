import { Component, Inject } from '@angular/core';
import { JQ_TOKEN } from './services/jquery.service';
import { Toastr, TOASTR_TOKEN } from './services/toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AgizaSasa';

  constructor(
    @Inject(JQ_TOKEN) private $: any,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ){}
}
