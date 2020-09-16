import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from '@dantickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
}
