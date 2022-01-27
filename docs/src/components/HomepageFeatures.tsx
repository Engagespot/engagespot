import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Engagespot was developed by developers, for developers. We've made it as
        easy as possible to integrate with your product.
      </>
    ),
  },
  {
    title: 'React.js SDK',
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Use our React.js SDK to turn any <code>&lt;div&gt;</code> in your app to
        a beautiful Notification Center.
      </>
    ),
  },
  {
    title: 'REST API',
    image: '/img/undraw_docusaurus_react.svg',
    description: <>Use our REST API to send notifications to your users..</>,
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
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
