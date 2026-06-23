import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Peipei 的思维实验室",
  description: "用 AI 系统思维，重构生活与育儿",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'AI 研报', link: '/thoughts/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/peipei-lab' }
    ]
  }
})
