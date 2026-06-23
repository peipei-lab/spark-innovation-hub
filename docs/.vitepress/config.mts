import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/spark-innovation-hub/',
  title: "Peipei 的思维实验室",
  description: "用 AI 系统思维，重构生活与育儿",
  sitemap: {
    hostname: 'https://peipei-lab.github.io/spark-innovation-hub/'
  },
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'AI 研报', link: '/thoughts/' }
    ],
    sidebar: [
      {
        text: '知识原子',
        items: [
          { text: '收玩具的迭代法', link: '/thoughts/test-post.html' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/peipei-lab' }
    ]
  }
})
