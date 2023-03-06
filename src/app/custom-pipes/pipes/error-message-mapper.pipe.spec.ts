import { ErrorMessageMapperPipe } from './error-message-mapper.pipe';

describe('ErrorMessageMapperPipe', () => {
  it('create an instance', () => {
    const pipe = new ErrorMessageMapperPipe();
    expect(pipe).toBeTruthy();
  });
});
