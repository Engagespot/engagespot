---
sidebar_position: 1
title: Build a Notification Center for your Next.js Blog
---

_Article originally posted on dev.to_

| Build a Notification Center for your Next.js Blog (3 Part Series)                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `1.`[Creating the basic blog structure and integrating the Notification Component using `@engagespot/react-component`](https://dev.to/h3mandev/build-a-full-fledged-notification-center-on-your-react-app-using-engagespot-part-1-39jn) |

| 2. Backend support for Like, Follow, Comments
| 3. Implementing View All Notification Page using `@engagespot/react-hooks` |
| 4. Bonus - Supporting android and ios using react-native |

It's no secret that notifications have become an integral part of our lives. Whether it's to inform someone liked your photo on Instagram or to notify that your order is coming soon, the Notification and Notification center has been evolved into a humongous beast in today's world.

Due to the sheer complexity involving notifications, implementing it from scratch is nothing short of a challenge itself. Creating the notification center UI, implementing WebPush, Email fallbacks, adding multiple channels... The list goes on and on...

[Engagespot](https://engagespot.co/) makes it easy to add in-app notification widget, real-time, and push notification features to your product with just a few lines of code.

_Disclamer: I am one of the maintainers of Engagespot_

In this 3 part series, we will create a simple blog site where users can add posts, like, comment, and follow other authors. We will have a notification center at the top, which will send out notifications for the above cases. The first part will focus on creating the basic blog site and adding the notification center component. I will be updating links to the upcoming articles above as it goes live. So without further ado, let's get started.

### Creating the Blog Site

We'll be using [Next.js](https://nextjs.org/) and [Supabase](https://supabase.com/) as our tech stack. I won't be focusing too much on the implementation details of the blog, but if you want to follow along, do
and do

```bash
git clone https://github.com/hemandev/blog-with-notifications
cd blog-with-notifications
git checkout tags/blog_starter
npm i
npm run dev
```

Make sure to populate the superbase URL and keys before starting the server.

Here's how the DB schema for the blog looks like

![DB Schema](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ao0lzk2o9pvs5nrkwlid.png)

_I was using [Supabase Visualizer](https://supabase-schema.vercel.app/) for generating the schema, and it was not able to detect the default user table)_

Let's take a look at our current blog.

![Home Page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5yxmkucbpuv6dfxv98up.png)
![Post Page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lpjo49901nnyiuw9o2bn.png)

So far, we have implemented the basic functionalities like authentication, creating new articles, adding comments, following...

Everything looks good so far. The next step is to add in the notifications. Let's go to [Engagespot Website](https://engagespot.co/) and set up a free account

After signing up, create a new app called "My Blog App," copy the API key and secret and keep it for later.

![Engagespot Dashboard](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fwr2ylxxfe7dnmm36exi.png)

Add the Enagegspot React component as a dependency in our Next.js project.

`npm i @engagespot/react-component`

I want the notification button to come on the top navigation. So let's add it into the header component.

```tsx
//components/header.tsx
import { Auth } from '@supabase/ui';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { supabaseClient } from '../lib/supabase/client';
import { Engagespot } from '@engagespot/react-component';
import { User } from '@supabase/supabase-js';

interface HeaderProps {
  user: User;
}

function Header({ user }: HeaderProps) {
  //const { user, session } = Auth.useUser()
  const router = useRouter();
  return (
    <header className="pb-6">
      <nav className="flex gap-4 items-center">
        <Link href="/">
          <a>Home</a>
        </Link>
        <button onClick={() => router.push(`/profile/${user?.email}`)}>
          Profile
        </button>
        <Link href="/posts">
          <a className="mr-auto">Posts</a>
        </Link>
        <Engagespot
          apiKey={process.env.NEXT_PUBLIC_ENGAGESPOT_API_KEY}
          userId={user?.email || ''}
        />
        <Link href="/create-new">
          <a className="bg-emerald-500 hover:bg-emerald-600 ease-in transition-all py-2 px-4  rounded text-white">
            Create New
          </a>
        </Link>
        <button
          onClick={async () => {
            const { error } = await supabaseClient.auth.signOut();
            if (error) console.log('Error logging out:', error.message);
          }}
        >
          Logout
        </button>
      </nav>
    </header>
  );
}

export default Header;
```

![Notification Center](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zsqokfb65pph2xj8ay4r.png)

Voila! Instant Notification Center!

Let's break down what just happened.

We imported the `Engagespot />` component on our `<Header/>.`
`Engagespot` expects `apiKey` and `userId` as mandatory properties. `apiKey` is the one we copied over from the dashboard. `userId` can be anything that can be used to identify a user uniquely. I'm passing email as the userId, but you can pass UUID, username, or any other unique field as well. On getting the userId, Engagespot will automatically create a user record in its system if it isn't already there. We can even pass additional user attributes which can define a user even more, and Engagespot can use it for more powerful features like notification grouping, mentioning, etc...

There are many other properties that we can use to customize the default behaviors. Head to the [docs](https://documentation.engagespot.co/) section for the complete list of properties. Once you're done exploring, let's try sending a notification to see how it's coming.

### Sending Notifications from the Dashboard

Now that we integrated the notification component into your app let's try sending a notification and see how it's coming.
We haven't integrated the API to send out the notifications. Luckily, we can use the Compose feature to send notifications directly without needing to configure any API. This can be useful for testing and other cases where you need to send targeted notifications to some users.

Head into the Compose section and start adding the details regarding the recipient, title, and content.

![Compose Section in Engagespot Dashboard](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/s0q1jwa4cebujpjib5td.png)

The `title` and `content` fields support Rich Text so that we can be creative with our notification content. Click on Submit and go back to your site.

![Notification Center with messages](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/eveo47wsa3vvrncaikeu.png)

Looks pretty sick!

Let's head to the final section, where we'll customize the Notification Center and make it truly belong to our site belong.

### Styling the Notification Center

Engagespot supports a `theme` property that allows extensive customizations on the look and feel of its Notification Center component. Again, head to the [docs](https://documentation.engagespot.co/) to get a complete picture of what all can be customized. Or, if you're using VSCode and Typescript, you can rely on the type definitions from the `@engagespot/react-component` package and keep experimenting as you go along.

Right now, I am just mainly looking to change the notification icon color to black and the header to `RGB(16 185 129)` to align with our site more. Let's see how to do that.

```tsx
<Engagespot
  apiKey={process.env.NEXT_PUBLIC_ENGAGESPOT_API_KEY}
  userId={user?.email || ''}
  theme={{
    panel: {
      height: '35rem',
      width: '27rem',
    },
    notificationButton: {
      iconFill: '#000',
    },
    colors: {
      brandingPrimary: 'rgb(16 185 129)',
    },
    header: {
      height: '2.5rem',
    },
    footer: {
      height: '2.5rem',
    },
  }}
/>
```

As you can see, while I was at it, I just changed the panel, header, and footer width so that it looks cleaner in our small width site.

Let's check out the final result.

![Final Blog Page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6mqh4ph427fg0rod7u5s.png)

Now that's more like it!

Here's the final code for the `Header` component

```tsx
import { Auth } from '@supabase/ui';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { supabaseClient } from '../lib/supabase/client';
import { Engagespot } from '@engagespot/react-component';
import { User } from '@supabase/supabase-js';

interface HeaderProps {
  user: User;
}

function Header({ user }: HeaderProps) {
  //const { user, session } = Auth.useUser()
  const router = useRouter();
  return (
    <header className="pb-6">
      <nav className="flex gap-4 items-center">
        <Link href="/">
          <a>Home</a>
        </Link>
        <button onClick={() => router.push(`/profile/${user?.email}`)}>
          Profile
        </button>
        <Link href="/posts">
          <a className="mr-auto">Posts</a>
        </Link>
        <Engagespot
          apiKey={process.env.NEXT_PUBLIC_ENGAGESPOT_API_KEY}
          userId={user?.email || ''}
          theme={{
            panel: {
              height: '35rem',
              width: '27rem',
            },
            notificationButton: {
              iconFill: '#000',
            },
            colors: {
              brandingPrimary: 'rgb(16 185 129)',
            },
            header: {
              height: '2.5rem',
            },
            footer: {
              height: '2.5rem',
            },
          }}
        />
        <Link href="/create-new">
          <a className="bg-emerald-500 hover:bg-emerald-600 ease-in transition-all py-2 px-4  rounded text-white">
            Create New
          </a>
        </Link>
        <button
          onClick={async () => {
            const { error } = await supabaseClient.auth.signOut();
            if (error) console.log('Error logging out:', error.message);
          }}
        >
          Logout
        </button>
      </nav>
    </header>
  );
}

export default Header;
```

You can get the full project from [https://github.com/hemandev/blog-with-notifications](https://github.com/hemandev/blog-with-notifications)

### Conclusion

I am going to stop for now but we haven't event scratched the surface of Engagespot yet! In the next article we'll see how to integrate APIs to send notifications when someone follows you or when someone like and comment on your post. We'll also see cover Desktop Notifications, Email fallbacks, Category specific preferences and much more!
