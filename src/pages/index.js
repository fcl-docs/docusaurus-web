import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { translate } from '@docusaurus/Translate';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {translate({ id: 'homepage.header.title', message: siteConfig.title })}
        </Heading>
        <p className="hero__subtitle">
          {translate({ id: 'homepage.header.subtitle', message: siteConfig.tagline })}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            {translate({ id: 'homepage.downloadButton.label', message: '立即下载' })}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={translate({ id: 'homepage.meta.title', message: '欢迎访问 {title}' }, { title: siteConfig.title })}
      description={translate({ id: 'homepage.meta.description', message: 'Description will go into a meta tag in <head />' })}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}