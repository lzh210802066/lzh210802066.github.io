---
# 指定页面布局模板
layout: post    # 使用 _layouts/post.html 作为页面模板。Jekyll 会把本文内容插入到 post.html的{{ content }} 中。

# 页面标题
title: "Matplotlib "   # 定义文章或页面标题。可以在模板中通过 {{ page.title }} 调用。

# 文章发布日期
date: 2025-10-24 # 定义文章发布日期。可用于排序、生成归档、RSS feed 等。

categories: skill 
---

Matplotlib是Python的绘图库，将数据图形化，用来绘制各种静态，动态，交互式的图表(线图、散点图、等高线图、条形图、柱状图、3D图形、图形动画等等)，并且提供多样化的输出格式。



Matplotlib 通常与[Numpy]({% post_url 2025-10-24-numpy %}) 和 [Scipy]({% post_url 2025-10-24-scipy %})一起使用，这种组合广泛用于替代 MatLab，是一个强大的科学计算环境，有助于通过 Python 学习数据科学或者机器学习。


# 一、pyplot

## plot()：用于绘制线图和散点图
Pyplot 是 Matplotlib 的子库，提供了和 MATLAB 类似的绘图 API。


```python
import matplotlib.pyplot as plt

from matplotlib import rcParams
rcParams['font.sans-serif'] = ['SimHei'] # 设置中文字体（Windows 系统常用“SimHei”黑体） 
rcParams['axes.unicode_minus'] = False  # 解决负号显示问题

# 单条线: plot ( [x], y, [fmt], *, data=None, **kwargs )
# 多条线: plot ( [x], y, [fmt], [x2], y2, [fmt2], ..., **kwargs )

#网格线: matplotlib.pyplot.grid(b=None, which='major', axis='both', )







plt.title("TITLE")        #标题
plt.xlabel("x - label")   #x轴标签
plt.ylabel("y - label")   #y轴标签
```






 


<table>
      <th>
          plot参数
      </th>
      <th>
          作用: 
      </th>
      <th>
          类型/格式
      </th>
      <th>
          说明
      </th>
       <tr>
            <td>
                [x] (可选)    
            </td>
            <td>
                 x轴数据 
            </td>
            <td>
                 数组或标量，默认为range(len(y))
            </td>
            <td>
                 如果省略，x会自动生成[0, 1, 2, ..., len(y)-1]
            </td>
        </tr>
        <tr>
            <td>
                 y（必选）   
            </td>
            <td>
                 y轴数据 
            </td>
            <td>
                 数组或标量
            </td>
            <td>
                 必需的参数，表示y坐标值
            </td>
        </tr>
        <tr>
            <td>
                 [fmt] (可选)
            </td>
            <td>
                 格式字符串，用于快速设置基本格式（如颜色、标记和线条样式）<br>默认格式字符串是“b-”，蓝色实线无标记。
            </td>
            <td>
                  '[marker][line][color]' <br>点型（marker）<br>线型（linestyle）<br>颜色（color）
            </td>
            <td> 
            </td>
        </tr>
        <tr>
            <td>
                data (可选)
            </td>
            <td>
                 指定数据来源
            </td>
            <td>
                 带索引的对象（如DataFrame）
            </td>
            <td>
                 当提供data参数时，x和y可以是字符串，表示data中的列名
            </td>
        </tr>
        <tr>
            <td>
                **kwargs (可选)
            </td>
            <td>
                 其他关键字参数，用于精细控制线条属性
            </td>
            <td>
                 marker: 标记样式<br>linestyle: 线条样式  <br>color: 颜色
            </td>
            <td>
                 markersize（简写 ms）: 标记大小，默认为 6<br>markerfacecolor（简写 mfc）:标记内部颜色<br>markeredgecolor（简写 mec）:标记边框颜色<br><br>linewidth（lw）: 线宽  <br>    <br> label: 图例标签
            </td>
        </tr>
</table>



<table>
    <tr>
        <td>线类型标记</td>
        <td>描述 </td>
    </tr>
    <tr>
        <td>&#39;-&#39;</td>
        <td>实线 </td>
    </tr>
    <tr>
        <td>&#39;:&#39;</td>
        <td>虚线 </td>
    </tr>
    <tr>
        <td>&#39;--&#39;</td>
        <td>破折线 </td>
    </tr>
    <tr>
        <td>&#39;-.&#39;</td>
        <td>点划线</td>
    </tr>
</table>


<table>
    <tr>
        <td>颜色标记</td>
        <td>描述 </td>
    </tr>
    <tr>
        <td>&#39;r&#39;</td>
        <td>红色 </td>
    </tr>
    <tr>
        <td>&#39;g&#39;</td>
        <td>绿色 </td>
    </tr>
    <tr>
        <td>&#39;b&#39;</td>
        <td>蓝色 </td>
    </tr>
    <tr>
        <td>&#39;c&#39;</td>
        <td>青色 </td>
    </tr>
    <tr>
        <td>&#39;m&#39;</td>
        <td>品红 </td>
    </tr>
    <tr>
        <td>&#39;y&#39;</td>
        <td>黄色 </td>
    </tr>
    <tr>
        <td>&#39;k&#39;</td>
        <td>黑色 </td>
    </tr>
    <tr>
        <td>&#39;w&#39;</td>
        <td>白色</td>
    </tr>
</table>


### Matplotlib 网格线

```python
matplotlib.pyplot.grid(b=None, which='major', axis='both', )
```

参数说明：

b：可选，默认为 None，可以设置布尔值，true 为显示网格线，false 为不显示，如果设置 **kwargs 参数，则值为 true。

which：可选，可选值有 'major'、'minor' 和 'both'，默认为 'major'，表示应用更改的网格线。

axis：可选，设置显示哪个方向的网格线，可以是取 'both'（默认），'x' 或 'y'，分别表示两个方向，x 轴方向或 y 轴方向。

**kwargs：可选，设置网格样式，可以是 color='r', linestyle='-' 和 linewidth=2，分别表示网格线的颜色，样式和宽度。


### Matplotlib 绘制多图
使用 pyplot 中的 subplot() 和 subplots() 方法来绘制多个子图。

subplot() 方法在绘图时需要指定位置，

```python
subplot(nrows, ncols, index, **kwargs)
```
```python
import matplotlib.pyplot as plt
import numpy as np

#plot 1:
x = np.array([0, 6])
y = np.array([0, 100])

plt.subplot(2, 2, 1)
plt.plot(x,y)
plt.title("plot 1")

#plot 2:
x = np.array([1, 2, 3, 4])
y = np.array([1, 4, 9, 16])

plt.subplot(2, 2, 2)
plt.plot(x,y)
plt.title("plot 2")

#plot 3:
x = np.array([1, 2, 3, 4])
y = np.array([3, 5, 7, 9])

plt.subplot(2, 2, 3)
plt.plot(x,y)
plt.title("plot 3")

#plot 4:
x = np.array([1, 2, 3, 4])
y = np.array([4, 5, 6, 7])

plt.subplot(2, 2, 4)
plt.plot(x,y)
plt.title("plot 4")

plt.suptitle("Test")
plt.show()
```

subplots() 方法可以一次生成多个，在调用时只需要调用生成对象的 ax 即可。


## Matplotlib 散点图 pyplot.scatter() 
















































