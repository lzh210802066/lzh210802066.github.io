---
# 指定页面布局模板
layout: post    # 使用 _layouts/post.html 作为页面模板。Jekyll 会把本文内容插入到 post.html的{{ content }} 中。

# 页面标题
title: "Matplotlib "   # 定义文章或页面标题。可以在模板中通过 {{ page.title }} 调用。

# 文章发布日期
date: 2025-10-24 # 定义文章发布日期。可用于排序、生成归档、RSS feed 等。

categories: skill 
---

Matplotlib是Python的绘图库，将数据图形化，用来绘制各种静态，动态，交互式的图表，并且提供多样化的输出格式。

绘制线图、散点图、等高线图、条形图、柱状图、3D图形、甚至是图形动画等等。

### 应用:
Matplotlib 通常与[Numpy]({% post_url 2025-10-24-numpy %}) 和 [Scipy]({% post_url 2025-10-24-scipy %})一起使用，这种组合广泛用于替代 MatLab，是一个强大的科学计算环境，有助于通过 Python 学习数据科学或者机器学习。










## pyplot
Pyplot 是 Matplotlib 的子库，提供了和 MATLAB 类似的绘图 API。




```python
import matplotlib.pyplot as plt

from matplotlib import rcParams
rcParams['font.sans-serif'] = ['SimHei'] # 设置中文字体（Windows 系统常用“SimHei”黑体） 
rcParams['axes.unicode_minus'] = False  # 解决负号显示问题
```








**以下是一些常用的 pyplot 函数：**

plot()：用于绘制线图和散点图

>  画单条线
> plot ( [x], y, [fmt], *, data=None, **kwargs )
> 
>  画多条线
> plot ( [x], y, [fmt], [x2], y2, [fmt2], ..., **kwargs )
> 
> x, y：点或线的节点，x 为 x 轴数据，y 为 y 轴数据，数据可以列表或数组。
>
> fmt：可选，定义基本格式（如颜色、标记和线条样式）。
>
> **kwargs：可选，用在二维平面图上，设置指定属性，如标签，线的宽度等。

颜色字符：'b' 蓝色，'m' 洋红色，'g' 绿色，'y' 黄色，'r' 红色，'k' 黑色，'w' 白色，'c' 青绿色，'#008000' RGB 颜色符串。多条曲线不指定颜色时，会自动选择不同颜色。

线型参数：'‐' 实线，'‐‐' 破折线，'‐.' 点划线，':' 虚线。

标记字符：'.' 点标记，',' 像素标记(极小点)，'o' 实心圈标记，'v' 倒三角标记，'^' 上三角标记，'>' 右三角标记，'<' 左三角标记...等等。

如果我们不指定 x 轴上的点，则 x 会根据 y 的值来设置为 0, 1, 2, 3..N-1。






scatter()：用于绘制散点图

bar()：用于绘制垂直条形图和水平条形图

hist()：用于绘制直方图

pie()：用于绘制饼图

imshow()：用于绘制图像

subplots()：用于创建子图










