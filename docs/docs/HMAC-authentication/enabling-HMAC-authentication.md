# Enabling HMAC Authentication

HMAC Authentication is an added security mechanism to prevent other people from reading your user's notifications. By default HMAC Authentication is turned off. But we highly recommend to turn it ON before making your app live.

To enable HMAC Authentication, you need to pass an HMAC signature value to the Engagespot front-end initialization code. And you must generate this HMAC signature on your _backend_ using your Engagespot API SECRET.

This will ensure that each user in your app will get a unique secret token, and they can authenticate themselves to Engagespot only using this token. Whereas without HMAC authentication, your users are authenticating to Engagespot just using their userId (be it email or a unique number that can be easily guessed). It's dangerous!

Here is how you can do this.

## Generating HMAC Signature

In you backend, use any crypto library to generate an HMAC signature for your user's unique identifier (For example, if you're passing your user's email id as `userId` to Engagespot front-end SDK, then you should hash the user's email). Use your Engagespot API-SECRET (NOT your API KEY) as the secret key for generating this hash. And you should pass this base64 encoded value of this hash to `userSignature` parameter in your front-end Engagespot SDK.

**On your Server code**

```
import createHmac from "crypto"
const userId = "youruser@example.com"
const hash = createHmac('sha256', apiSecret).update(userId, 'utf8').digest('base64');

```

You must return this hash to your front-end app via an API call or something.

**On your front-end**

```
<Engagespot
   apiKey={ENGAGESPOT_API_KEY}
   userId={youruser@example.com}
   userSignature={hash} //Hmac hashed value of the above userId
/>
```
