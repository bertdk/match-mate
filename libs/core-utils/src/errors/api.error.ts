/**
 * Base for API Error
 */
export class ApiError extends Error {
  public code: number;
  public reason: string;
  public payload?: object;

  constructor(code: number, reason: string, message: string, payload?: object) {
    super(message);
    this.code = code;
    this.reason = reason || this.constructor.name;
    this.payload = payload;
  }
}
