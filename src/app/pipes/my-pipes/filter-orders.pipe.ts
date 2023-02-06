import { Pipe, PipeTransform } from '@angular/core';
import { OrderStatus } from 'src/app/models/order-status.model';
import { Order } from 'src/app/models/order.model';

@Pipe({
  name: 'filterOrders'
})
export class FilterOrdersPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(orders: Readonly<Order[]>, filterBy: OrderStatus): unknown {
    return orders.filter(o => o.status === filterBy);
  }

}
