Jekyll 构建与浏览器渲染流程说明

========================
1️⃣ Jekyll 静态生成阶段
========================

1. 页面文件（如 index.html 或 post.md）包含 YAML Front Matter：
   ---
   layout: default
   title: 首页
   ---

2. Jekyll 读取index.html页面文件：
   - 识别布局为 default
   - 解析页面内容

3. Jekyll 读取布局模板 default.html：
   - 包含公共结构：
       {% include head.html %}  → 页头信息（CSS、JS、meta）
       {% include header.html %} → 网站导航、标题
       {{ content }} → 页面主体内容（index.html ）
       {% include footer.html %} → 页脚信息（版权、联系方式）

4. Jekyll 将页面内容index.html插入 {{ content }}：
   - 生成完整 HTML 文件

5. 解析 include 标签：
   - head.html、header.html、footer.html 的内容被插入
   - 最终生成 HTML （首页）
   - 文件示例：
   <html>
     <head>...</head>
     <body>
       <header>...</header>
       <main>页面主体内容</main>
       <footer>...</footer>
     </body>
   </html>

6. 完成静态站点构建，存放在 _site 文件夹

========================
2️⃣ 浏览器渲染阶段
========================

1. 浏览器请求 HTML 文件（通过 Jekyll serve 或 GitHub Pages）
2. 浏览器接收到完整 HTML 文件
3. 浏览器按顺序解析 HTML：
   - <head> → 解析 CSS、JS、meta 等
   - <body> → 渲染 header → main → footer
4. 浏览器根据 CSS 样式计算布局并显示页面
5. JavaScript 被加载并执行，增加动态效果

========================
3️⃣ default.html 的作用
========================

- **Jekyll 层面**：
  - default.html 是基础布局模板（Layout）
  - 包含站点公共结构和样式
  - 页面内容通过 {{ content }} 插入布局
  - 使用 include 管理 head/header/footer 等模块化内容
  - 使全站结构统一，便于维护

- **浏览器层面**：
  - 浏览器看不到 default.html 概念
  - 它只看到完整的 HTML 文件
  - 仍按 HTML 解析顺序渲染页面

========================
4️⃣ 总结
========================

- default.html = 页面“容器框架”，统一管理头部、页脚和样式
- 页面文件只关心主体内容，通过 layout 插入容器
- Jekyll 生成的 HTML 文件交给浏览器渲染
- include 文件实现模块化，方便修改全站统一内容
