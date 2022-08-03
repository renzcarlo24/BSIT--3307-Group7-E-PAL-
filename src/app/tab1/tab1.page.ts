import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AddNewEventPage } from '../add-new-event/add-new-event.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  dailyPlans = [{
    itemName : 'Jasfer Birthday',
    itemDuedate: '10-07-2022',
    itemPriority: 'Private',
    itemCategory: 'Resort'
  },
  {
    itemName : 'Renz & Liza 1st Anniversary',
    itemDuedate: '11-13-2022',
    itemPriority: 'Private',
    itemCategory: 'Restaurant'
  },
  ]

  today: number = Date.now();
  constructor(public modalCtrl:ModalController) {}

  async addTask(){
    const modal = await this.modalCtrl.create({
      component: AddNewEventPage
    })

    modal.onDidDismiss().then(newTaskObj =>{
      console.log(newTaskObj.data);
      this.dailyPlans.push(newTaskObj.data)
    })
    
    return await modal.present()

  }

  delete(index){
    this.dailyPlans.splice(index,1)

  }

}
