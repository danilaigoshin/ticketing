import { PaymentCreatedEvent, Publisher, Subjects } from '@dantickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
