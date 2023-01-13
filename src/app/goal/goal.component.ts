import { Component, EventEmitter } from '@angular/core';

import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent {
  goals: Goal[];
  constructor(){
    this.goals = [
      new Goal (1,'make USD 50000 by Dec 2023', 'Have that money in my pnc growth account transferracle to spend', new Date(2023,11,31)),
      new Goal (2,'Get As in all my classes in 2023', 'take 10 classes this year', new Date(2023,11,31)),
      new Goal (3,'win kenya national chess championship 2023', 'win with 9/9 points', new Date(2023,11,31)),
      new Goal (4,'Build muscle and abs,gain 20 pounds of muscle','hit the gym every two days', new Date(2023,11,31)),
      new Goal (5,'be in the top 20 in the PUTNAM competition', 'do mathematics lowkey', new Date(2023,11,31)),
      new Goal (6,'create my own product in tech', 'something ground-breaking that will generate a lot of money', new Date(2023,11,31))
    ]
  }
  toggleDetails(index:number){
    this.goals[index].showDescription = ! this.goals[index].showDescription;
  }
  completeGoal(isComplete:boolean, index:number){
    if (isComplete){
      this.goals.splice(index,1);
    }
  }
  deleteGoal(isComplete:boolean, index:number){
    if(isComplete){
      var sure = confirm(`Are you sure you want to delete ${this.goals[index].name} ?`);
      if(sure){
      this.goals.splice(index,1);
    }
    }
    
  }
  addNewGoal(goal:Goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

}
