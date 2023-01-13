import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Goal } from '../goal';
import { DateCountPipe } from '../date-count.pipe';
@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent {
  @Input() soal: Goal = new Goal(0,'', '', new Date);
  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
}
