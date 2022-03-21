import { verify } from '../ingredients';

export const verifyMock = verify as jest.MockedFunction<typeof verify>;
