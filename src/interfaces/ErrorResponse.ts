import MessageResponse from './NotifyResponse';

export default interface ErrorResponse extends MessageResponse {
  stack?: string;
}
