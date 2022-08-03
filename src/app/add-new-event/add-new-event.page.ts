import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-event',
  templateUrl: './add-new-event.page.html',
  styleUrls: ['./add-new-event.page.scss'],
})
export class AddNewEventPage implements OnInit {

  categories = ['school', 'personal', 'home']

 taskName
 taskDate
 taskPriority
 taskCategory
 

  taskObject

  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }
  async dismis(){
    await this.modalCtrl.dismiss(this.taskObject)
  }

  selectedCategory(index){
    this.taskCategory = this.categories[index]

  }

AddTask(){
  this.taskObject = ({itemName:this.taskName, 
    itemDuedate:this.taskDate, 
    itemPriority:this.taskPriority,
  itemCategory:this.taskCategory})

  this.dismis()

}

}