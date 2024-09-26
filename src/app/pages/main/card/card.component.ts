import { Component } from '@angular/core';
import { Card } from '../../card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  cards : Card[] = [
    new Card('Lasha','Developer','https://i0.wp.com/mrleica.com/wp-content/uploads/2018/08/39699055175_5876c32612_b1.jpg?fit=1024%2C689&ssl=1'),
    new Card('David','Analyst','https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg'),
    new Card('Luke','Tester','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEs9uhRcYwVDbB2F-aS5Dt205cdFQNggZyyg&s')
  ]

}
