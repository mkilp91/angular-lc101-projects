import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Take out trash', 'Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries', 'Dishes'];
   finishedChores = [];

   targetImage = 'https://img.freepik.com/free-vector/red-dart-arrow-hitting-target-center-dartboard_91128-1576.jpg?w=2000'
   constructor() { }

   ngOnInit() {
   }

}
