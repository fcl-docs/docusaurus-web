import clsx from 'clsx';
import Heading from '@theme/Heading';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: translate({
      id: 'homepage.feature.easyUse.title',
      message: '开箱即用'
    }),
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: translate({
      id: 'homepage.feature.easyUse.description',
      message: 'Fold Craft Launcher为用户提供了内置的java以及必要环境，不需要繁琐的操作即可快速启动游戏'
    }),
  },
  {
    title: translate({
      id: 'homepage.feature.focusMatters.title',
      message: '开源社区驱动'
    }),
    Svg: require('@site/static/img/v.svg').default,
    description: translate({
      id: 'homepage.feature.focusMatters.description',
      message: '该项目遵守GPL 3.0协议，启动器完全免费，欢迎大家参与开源社区'
    }),
  },
  {
    title: translate({
      id: 'homepage.feature.poweredByReact.title',
      message: '自定义主题与控制布局'
    }),
    Svg: require('@site/static/img/kz.svg').default,
    description: translate({
      id: 'homepage.feature.poweredByReact.description',
      message: 'Fold Craft Launcher为用户提供了深夜与白天模式切换，而且还可以独自设置背景图，UI颜色。启动器内置由社区提供的优质控制布局，不必要担心自己手搓一个控制布局。'
    }),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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