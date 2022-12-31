---
sidebar_position: 2
---
# Enabling HMAC Authentication in Engagespot Bubble Plugin

## What is HMAC Authentication?
HMAC Authentication is an added security mechanism to prevent other people from reading your user's notifications. Read more about HMAC [here](../user/enabling-HMAC-authentication.mdx)

:::warning
By default HMAC Authentication is turned off for all Engagespot apps. But we highly recommend to turn it ON before making your app live.
:::

## 1. Enable HMAC from Engagespot dashboard

<img src="60%" src="/img/enable-hmac-dashboard.png"/>

## 2. Add Signature Generator to signup/login workflow

Engagespot Bubble plugin has an action - <strong>Engagespot - Generate User Signature</strong> that should be used to generate an HMAC signature. You should add this action to a Login or Signup workflow. 

That is, immediately after a user is logged in or signed up in your Bubble app, you should generate the HMAC, and then attach it to your user's profile.

<img width="60%" src="/img/user_signature_generator.png"/>

## 3. Attach the generated signature to the current bubble user

<img width="60%" src="/img/make-changes-to-current-user.png"/>

<p>Use the "Make changes to current user" action provided by Bubble to attach the generated HMAC to the current user.</p>

<p>You should attach the signature to the <strong>engagespot_user_signature</strong> field. If the field is not found, you should create a new text field with name <strong>engagespot_user_signature</strong></p>
<img width="60%" src="/img/attach_signature_to_user.png" />

<p><strong>Choose the value from previous action (Generate User Signature)</strong></p>

<img width="60%" src="/img/attach_signature3.png"/>

## 4. That's all you need to do!