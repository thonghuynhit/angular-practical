import { Component } from '@angular/core'

@Component({
  selector: 'eventbinding-component',
  styleUrls: ['./eventbindingcomponent.component.scss'],
  templateUrl: './eventbindingcomponent.component.html'
})

export class Eventbindingcomponent {
  constructor() {}

  clickButton = (e: MouseEvent) => {
    console.log(e)
  }
  textValue = ''
  mouseOver = () => {
    this.textValue = 'Mouse Over'
  }

  mouseLeave = () => {
    this.textValue = 'Mouse Leave'
  }

}
