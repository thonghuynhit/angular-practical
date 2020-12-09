import { Component } from '@angular/core'

@Component({
  selector: 'binding-component',
  templateUrl: './bindingcomponent.component.html',
  styleUrls: ['./bindingcomponent.component.scss'],
})
export class Bindingcomponent {
  constructor() {}
  tempArray: any[] = [
    'https://vanhienblog.info/wp-content/uploads/2019/02/anh-gai-xinh-dep-hot-girl-1-00-600x445.jpg',
    'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg',
    'https://2.bp.blogspot.com/-5bGrIrLVsms/WnFiwDBKgYI/AAAAAAAAHGs/KPp1IDsgD9AumXTY9Ehh31pZ0p04cHDKQCLcBGAs/s1600/girl-xinh-hvnh-2.jpg',
    'https://cdn.24h.com.vn/upload/2-2019/images/2019-04-19/1555668648-429-ppppppppppp-1555668639-width650height813.jpg',
    'https://i.imgur.com/uQ7c94B.jpg',
    'https://img2.thuthuatphanmem.vn/uploads/2019/01/04/hinh-anh-girl-xinh-dep-de-thuong_025104504.jpg'
  ]
  attrInputArray: any[] = ['text', 'password', 'color', 'range', 'file', 'submit']
  rand = (): number =>  Math.floor(Math.random() * (this.tempArray.length))
  randInput = (): number => Math.floor(Math.random() * this.attrInputArray.length)
  type = 'type'

  styles = {
    backgoundColor: "#cdeeaa",
    fontSize: 40,
  }
}
