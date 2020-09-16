import { Publisher, Subjects, TicketCreatedEvent } from '@dantickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
