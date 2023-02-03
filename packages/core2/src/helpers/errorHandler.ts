import { InstanceOptions } from '../createInstance';
import { errorCodes } from './errorCodes';

type ErrorType = keyof typeof errorCodes;

export const handleError = (
  errorType: ErrorType,
  additionalParams?: Parameters<typeof console.log>
) => {
  const { code, message, severity } = errorCodes[errorType];
  const errorMessage = `[${code}]: ${message}`;
  const additionalInfo = additionalParams ?? '';
  if (severity === 'error') {
    throw new Error(`${errorMessage} ${additionalInfo}`);
  }
  if (severity === 'warn') {
    console.warn(errorMessage, additionalInfo);
  }
};

export const validateIncomingArgs = (options: InstanceOptions) => {
  if (!options) handleError('noOptions');

  if (!options.apiKey) handleError('noApiKey');

  if (!options.userId) handleError('noUserId');

  if (!options.userSignature) handleError('noUserId');
};
