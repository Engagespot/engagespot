import { InstanceOptions } from 'src/createInstance';

const errorCodes = {
  noOptions: {
    message: 'options is required while instantiating Engagespot.',
    code: 'ES1000',
    severity: 'error',
  },
  noApiKey: {
    message: 'apiKey is required while instantiating Engagespot.',
    code: 'ES1007',
    severity: 'error',
  },
  noUserId: {
    message: 'userId is required while instantiating Engagespot.',
    code: 'ES1002',
    severity: 'error',
  },
  noUserSignature: {
    message: 'Its recommended to pass a userSignature for security purposes',
    code: 'ES1000',
    severity: 'warn',
  },
  serviceWorkerRegistrationFailure: {
    message:
      'Service worker registration failed. This error is probably due to missing service-worker file. Try turning off web-push channel in your Engagespot dashboard',
    code: 'ES1003',
    severity: 'warn',
  },
  serviceWorkerFileMissing: {
    message:
      'SDK initialization failed. Service worker missing: No file found at /service-worker.js',
    code: 'ES1004',
    severity: 'error',
  },
  webPushNotSupported: {
    message: 'Web push is not supported in this browser',
    code: 'ES10011',
    severity: 'warn',
  },
  nonHttpsWebPushDisabled: {
    message: 'Non HTTPS web push is disabled.',
    code: 'ES10012',
    severity: 'warn',
  },
};

type ErrorType = keyof typeof errorCodes;

export const handleError = (
  errorType: ErrorType,
  additionalParams?: Parameters<typeof console.log>
) => {
  const { code, message, severity } = errorCodes[errorType];
  const errorMessage = `[${code}]: ${message}`;
  if (severity === 'error') {
    throw new Error(errorMessage);
  }
  if (severity === 'warn') {
    console.warn(errorMessage, additionalParams ?? '');
  }
};

export const validateIncomingArgs = (options: InstanceOptions) => {
  if (!options) handleError('noOptions');

  if (!options.apiKey) handleError('noApiKey');

  if (!options.userId) handleError('noUserId');

  if (!options.userSignature) handleError('noUserId');
};
