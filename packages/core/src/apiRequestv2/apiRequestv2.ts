import { HttpRequestMethod } from './interfaces/http-request-methods.type';

export class APIRequestV2 {
  private apiKey: string;
  private userId: string;
  private userSignature: string | null;

  constructor(
    apiKey: string,
    userId: string,
    userSignature: string | null = null
  ) {
    this.apiKey = apiKey;
    this.userId = userId;
    this.userSignature = userSignature;
  }

  /**
   * Executes fetch() request
   * @param method
   * @param url
   * @param body
   * @param headers
   * @returns
   */
  private async executeFetchRequest(
    method: HttpRequestMethod,
    url: string,
    body: any | null = null,
    headers: any = null
  ) {
    const options: RequestInit = {
      method: method,
      cache: 'no-store',
      ...(['POST', 'PUT', 'PATCH'].includes(method) && {
        body: JSON.stringify(body),
      }),
      headers: {
        'Content-Type': 'application/json',
        'X-ENGAGESPOT-API-KEY': this.apiKey,
        'X-ENGAGESPOT-USER-ID': this.userId,
        ...(this.userSignature && {
          'X-ENGAGESPOT-USER-SIGNATURE': this.userSignature,
        }),
        ...headers,
      },
    };

    return fetch(url, options).then(async response => {
      if (!response.ok) {
        await this.handleError(response);
      }

      try {
        return await response.json();
      } catch (_) {
        return null;
      }
    });
  }

  async handleError(response: Response) {
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

  //Wrapper for GET Method
  async get(url: string, headers: any = null) {
    return await this.executeFetchRequest('GET', url, null, headers);
  }

  //Wrapper for POST Method
  async post(url: string, body: any, headers: any = null) {
    return await this.executeFetchRequest('POST', url, body, headers);
  }

  //Wrapper for PUT Method
  async put(url: string, body: any, headers: any = null) {
    return await this.executeFetchRequest('PUT', url, body, headers);
  }

  //Wrapper for PATCH Method
  async patch(url: string, body: any, headers: any = null) {
    return await this.executeFetchRequest('PATCH', url, body, headers);
  }

  //Wrapper for DELETE Method
  async delete(url: string, headers: any = null) {
    return await this.executeFetchRequest('DELETE', url, null, headers);
  }
}
