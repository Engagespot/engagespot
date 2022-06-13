import { SetChannelsFetchSuccess } from '../redux/reducers/additional-fetch/additionalFetchActions';
import { ResendVerficationEmail } from '../services/auth.service';
import {
  DisableProvider,
  EnableProvider,
  ListChannels,
} from '../services/channels.service';
import { ParseError } from '../services/parse-api-error.service';
import { Toaster } from '../services/toaster.service';

export async function handleError(error) {
  let parser = new ParseError(error);
  parser.show();
}

export async function handlePromise(promiseToFullfill) {
  try {
    const response = await promiseToFullfill();
    return [response, null];
  } catch (error) {
    handleError(error);
    return [null, error];
  }
}

export function openToaster({ type, title, message }) {
  const toaster = new Toaster(type);
  toaster.title = title;
  toaster.message = message;
  toaster.open();
}

export const handleResendVerificationEmail = async ({
  setLoading,
  loading,
  email,
}) => {
  setLoading(true);

  if (loading) return;

  const data = {
    email,
  };

  const [result, error] = await handlePromise(() =>
    ResendVerficationEmail(data)
  );

  if (error) {
    return setLoading(false);
  }

  const toaster = new Toaster('success');
  toaster.title = 'Success';
  toaster.message = 'verification email resend';
  toaster.open();

  setLoading(false);
};

export const updateChannelData = async ({ appId, dispatch }) => {
  const [result, error] = await handlePromise(() => ListChannels(appId));
  if (error) return;

  dispatch(SetChannelsFetchSuccess(result));
};

export const handleSwitchChangeInChannelsPage = async ({
  value,
  data,
  appId,
  dispatch,
}) => {
  const channel = data.channel;
  let providerIdentifier;

  if (data.provider) {
    providerIdentifier = data.provider.identifier;
  } else if (data.identifier) {
    providerIdentifier = data.identifier;
  } else {
    return openToaster({
      type: 'error',
      title: 'Error',
      message: 'something went wrong',
    });
  }

  try {
    if (value === true) {
      await EnableProvider({ appId, channel, providerIdentifier });
      return updateChannelData({ appId, dispatch });
    } else {
      await DisableProvider({ appId, channel, providerIdentifier });
      return updateChannelData({ appId, dispatch });
    }
  } catch (e) {
    handleError(e);
  }
};

export const ifNotAdminShowErrorAndStopExecution = ({ selectedClient }) => {
  // if role is admin or owner,has privileges
  if (selectedClient.length !== 0 && selectedClient[0].role !== 'user') {
    return false;
  }

  const toaster = new Toaster('error');
  toaster.title = 'Error';
  toaster.message = 'You do not have admin privileges';
  toaster.open();
  return true;
};
