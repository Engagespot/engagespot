import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
  url?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Complete Notification System',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        We've built a scalable multi-channel notification infrastructure so you don't have to. Just plug in our APIs and SDKs, done!
      </>
    ),
    url: '/docs/introduction/understanding-concepts',
  },
  {
    title: 'Front-end UI Components',
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Use our front-end Javascript libraries to build a realtime notification feed, and preference manager in your apps.
      </>
    ),
    url: '/docs/javascript-guide/using-react-component',
  },
  {
    title: 'REST APIs & SDKs',
    image: '/img/undraw_docusaurus_react.svg',
    description: <>Use our REST APIs and SDKs to send notifications programatically from your app to your users.</>,
    url: '/docs/rest-api',
  },
];

function Feature({ title, image, description, url }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={url}>
          <img className={styles.featureSvg} alt={title} src={image} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
