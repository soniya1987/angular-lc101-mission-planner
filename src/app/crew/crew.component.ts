import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];
  crewPhoto: string = "";

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(crewMember: object)
  {
    if (!this.crew.includes(crewMember) && this.crew.length < 3)
    {
      this.crew.push(crewMember);
    }
  }

  isSelected(crewMember: object)
  {
    return this.crew.includes(crewMember);
  }

  selectImage(crewMember: object)
  {
    this.inCrew = this.crew.includes(crewMember);
    this.crewPhoto = crewMember["photo"];
  }

  deSelectImage(crewMember: object)
  {
    this.inCrew = !this.crew.includes(crewMember);
    this.crewPhoto = "";
  }
}
