// @ts-check
// `@type` JSDoc 注解允许编辑器自动完成和类型检查
// （当与 `@ts-check` 搭配使用时）。
// 有多种等效的方式来声明你的 Docusaurus 配置。
// 参见: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// 此代码运行在 Node.js 环境 - 不要在这里使用客户端代码（浏览器API，JSX...）

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fold Craft Launcher', // 网站标题
  tagline: '在安卓设备上运行minecraft JAVA版的一种方式。', // 网站标语
  favicon: 'img/favicon.ico', // 网站图标

  // 在这里设置你网站的生产环境URL
  url: 'https://your-docusaurus-site.example.com',
  // 设置你的站点服务的基本路径/<baseUrl>/
  // 对于GitHub Pages部署，通常是 '/<projectName>/'
  baseUrl: '/',


  onBrokenLinks: 'warn', // 当检测到损坏链接时抛出错误
  onBrokenMarkdownLinks: 'warn', // 当检测到损坏的Markdown链接时发出警告

  // 即使你不使用国际化，你也可以使用此字段来设置
  // 有用的元数据如 html 语言。例如，如果你的站点是中文的，你
  // 可能希望将 "en" 替换为 "zh-Hans"。
  i18n: {
    defaultLocale: 'zh-Hans', // 默认区域设置
    locales: ['en', 'zh-Hans'], // 支持的区域设置列表
    path: 'i18n', // 区域设置文件的路径
    localeConfigs: {
      en: {
        label: 'English', // 英文标签
        direction: 'ltr', // 文本方向：从左到右
        htmlLang: 'en-US', // HTML 语言属性
        calendar: 'gregory', // 使用的历法
        path: 'en', // 英文内容路径
      },
      'zh-Hans': {
        label: '简体中文', // 简体中文标签
        direction: 'ltr', // 文本方向：从左到右
        htmlLang: 'zh-CN', // HTML 语言属性
        calendar: 'gregory', // 使用的历法
        path: '/', // 简体中文内容路径
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js', // 侧边栏配置文件路径
          // 请将此更改为你的仓库地址。
          // 删除此项以移除"编辑此页"链接。
          editUrl:
            'https://github.com/fcl-docs/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true, // 显示阅读时间
          feedOptions: {
            type: ['rss', 'atom'], // 提供RSS和Atom订阅源
            xslt: true, // 启用XSLT转换
          },
          // 请将此更改为你的仓库地址。
          // 删除此项以移除"编辑此页"链接。
          editUrl:
            'https://github.com/fcl-docs/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // 用于强制执行博客最佳实践的有用选项
          onInlineTags: 'warn', // 内联标签警告
          onInlineAuthors: 'warn', // 内联作者警告
          onUntruncatedBlogPosts: 'warn', // 未截断博客文章警告
        },
        theme: {
          customCss: './src/css/custom.css', // 自定义CSS文件路径
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 替换为你项目的社交卡片图片
      image: 'img/logo.png',
      navbar: {
        title: 'Fold Craft Launcher', // 导航栏标题
        logo: {
          alt: 'Logo', // Logo替代文本
          src: 'img/logo.png', // Logo图片源
        },
        items: [
          {
            type: 'localeDropdown', // 区域下拉菜单
            position: 'left', // 左侧位置
          },
          {
            type: 'docSidebar', // 文档侧边栏
            sidebarId: 'tutorialSidebar', // 侧边栏ID
            position: 'left', // 左侧位置
            label: '文档', // 标签
          },
          {to: '/blog', label: '更新日志', position: 'left'}, // 博客链接
          {to:'/download',label:'下载'},
          {
            href: 'https://github.com/fcl-team/foldcraftlauncher',
            label: 'GitHub', // GitHub链接标签
            position: 'right', // 右侧位置
          },
        ],
      },
      footer: {
        style: 'dark', // 页脚样式：深色
        links: [
          {
            title: '文档', // 分类标题
            items: [
              {
                label: '入门-了解启动器', // 链接标签
                to: '/docs/intro', // 链接地址
              },
            ],
          },
          {
            title: '社区', // 分类标题
            items: [
              {
                label: '爱发电（QQ群）', // Stack Overflow链接标签
                href: 'https://stackoverflow.com/questions/tagged/docusaurus', // 链接地址
              },
              {
                label: 'Discord', // Discord链接标签
                href: 'https://discordapp.com/invite/docusaurus', // 链接地址
              },
            ],
          },
          {
            title: '更多', // 分类标题
            items: [
              {
                label: 'MobileGlues渲染器', // 链接标签
                href: 'https://github.com/Swung0x48/MobileGlues-release', 
              },
              {
                label: 'GitHub', // GitHub链接标签
                href: 'https://github.com/fcl-team/foldcraftlauncher'
              },
            ],
          },
        ],
        copyright: `网站版权所有 © ${new Date().getFullYear()} 柠枺. 使用Docusaurus构建。<br/><a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">浙ICP备xxxxxxxx号-x</a>`, // 版权信息带备案号
      },
      prism: {
        theme: prismThemes.github, // Prism主题：GitHub风格
        darkTheme: prismThemes.dracula, // Prism暗色主题：Dracula风格
      },
    }),
};

export default config;