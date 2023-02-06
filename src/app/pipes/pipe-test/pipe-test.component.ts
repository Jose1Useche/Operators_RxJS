import { Component, OnInit } from '@angular/core';

import { OrderStatus } from '../../models/order-status.model';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {
  
  myDate: Date =  new Date();
  
  os = OrderStatus;
  
  orders: Order[] = [
    { id: 1, status: OrderStatus.inPreparation },
    { id: 2, status: OrderStatus.inPreparation },
    { id: 3, status: OrderStatus.prepared },
    { id: 4, status: OrderStatus.delivered },
    { id: 5, status: OrderStatus.inPreparation },
  ];

  myOrden = new Order(25, 'cafecito');
  
  
  ngOnInit(): void {
    console.log(this.myOrden);
  }

  generateOrder(): void {
    const newOrder: Order = {
      id: this.orders.length + 1,
      status: this.os.inPreparation
    };

    // this.orders.push(newOrder);'
    this.orders = [...this.orders, newOrder];
  }
}
