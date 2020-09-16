import { Publisher, Subjects, TicketUpdatedEvent } from '@dantickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
