import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-govt-id',
  templateUrl: './govt-id.component.html',
  styleUrls: ['./govt-id.component.css']
})
export class GovtIdComponent implements OnInit {
  verify_url: string = "assets/images/id.png";
  constructor() { }

  ngOnInit(): void {
  }

}
