# =====================================
# 💎 Gemfile —— Jekyll 博客依赖配置文件
# =====================================

# 指定 RubyGems 的源（相当于软件仓库），用于下载依赖包
source "https://rubygems.org"

# -------------------------------------
# 🧱 核心依赖
# -------------------------------------

# 安装 Jekyll 博客框架
# "~> 4.3" 表示使用 4.3.x 版本（例如 4.3.2、4.3.3 等）
# Jekyll 是整个静态网站生成的核心引擎
gem "jekyll", "~> 4.3"


# 核心 Markdown 解析器
gem "kramdown"

# 添加对 GitHub Flavored Markdown (GFM) 的支持
# Jekyll 默认使用 kramdown 来渲染 Markdown
# 但需要这个额外的解析器来支持表格、任务列表、删除线等 GFM 特性
gem 'kramdown-math-katex'

# -------------------------------------
# 🔌 插件组定义
# -------------------------------------
# 这个 group 块会在 Jekyll 运行时自动加载这些插件
# 它对应于 _config.yml 中的 plugins 配置
group :jekyll_plugins do
  
  # jekyll-feed：生成 RSS feed.xml 文件
  # 读者可以通过订阅 feed 获取博客更新
  gem "jekyll-feed"

  # jekyll-seo-tag：自动添加 SEO 元标签（如标题、描述、Open Graph）
  # 让搜索引擎更容易理解你的网站内容
  gem "jekyll-seo-tag"
end
