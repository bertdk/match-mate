import { expect } from 'chai';
import { HttpStatus } from '@nestjs/common';

export const expectThrowsAsync = async (
  method: Promise<any>,
  errorMessage?: string,
  reason?: string,
  errorCode?: HttpStatus,
) => {
  let error = null;
  try {
    await method;
  } catch (err) {
    error = err;
  }
  expect(error, `Didn't throw`).to.be.instanceOf(Error);
  if (errorMessage) {
    expect(error.message).to.equal(errorMessage);
  }
  if (reason) {
    expect(error.reason).to.equal(reason);
  }
  if (errorCode) {
    expect(error.status).to.equal(errorCode);
  }
  return error;
};
