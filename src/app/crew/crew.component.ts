import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  memberBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  add(name: string, isFirstMission: boolean)
  {
    let newCrew = { name: name, firstMission: isFirstMission };
    if (!this.crew.includes(newCrew))
    {
      this.crew.push({name: name , firstMission : isFirstMission});
    }
  }

  remove(crewMember: object)
  {
    let indexOfCrew = this.crew.indexOf(crewMember);
    this.crew.splice(indexOfCrew, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  save(name: string, member: object) {
    member['name'] = name;
    this.memberBeingEdited = null;
  }
}
