export interface apiRequestOptions {
  url: string;
  method: 'GET' | 'POST' | 'DELETE' | 'PUT';
  body?: object | null;
  headers?: object;
  credentials?: string;
}

export default function sendRequest(apiRequestOptions: apiRequestOptions) {
  const options: RequestInit = {
    method: apiRequestOptions.method,
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      ...apiRequestOptions.headers,
    },
  };

  if (apiRequestOptions.body !== null) {
    options.body = JSON.stringify(apiRequestOptions.body);
  }

  return fetch(apiRequestOptions.url, options).then(async response => {
    if (!response.ok) {
      await handleError(response);
    }

    try {
      return await response.json();
    } catch (_) {
      return null;
    }
  });
}

async function handleError(response: Response) {
  let errorMessage;
  try {
    const { error = 'Unknown error', message = 'No description' } =
      await response.json();
    errorMessage = `Unexpected status code ${response.status}: ${error}, ${message}`;
  } catch (_) {
    errorMessage = `Unexpected status code ${response.status}: Cannot parse error response`;
  }

  throw new Error(errorMessage);
}
