import { Publisher, OrderCancelledEvent, Subjects } from '@dantickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
