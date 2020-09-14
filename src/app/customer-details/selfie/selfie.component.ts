import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selfie',
  templateUrl: './selfie.component.html',
  styleUrls: ['./selfie.component.css']
})
export class SelfieComponent implements OnInit {
  verify_url: string = "assets/images/id.png";
  selfie_url: string = "assets/images/selfie.png"
  constructor() { }

  ngOnInit(): void {
  }

}
