import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { TodoService } from '../todo.service';
import { UpdatePage } from '../update/update.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  dailyPlans = []

  today: number = Date.now();
  constructor(public modalCtlr:ModalController, public todoService:TodoService) {
    this.getAllTask()
  }
  
  async addNewItem(){
    const modal = await this.modalCtlr.create({
      component: AddNewTaskPage,
    })

    modal.onDidDismiss().then(newTask =>{
     this.getAllTask()


    })
    
    return await modal.present()

  }

  getAllTask(){
    this.dailyPlans = this.todoService.getAllTasks()
    console.log(this.todoService.getAllTasks());
  }

  delete(key){
    
    this.todoService.deleteTask(key)
    this.getAllTask()
  }

  async update(selectedTask){
    const modal = await this.modalCtlr.create({
      component: UpdatePage,
      componentProps: {task: selectedTask}
    })

    modal.onDidDismiss().then(()=>{
      this.getAllTask()
    })
    

    return await modal.present()
  }

}
