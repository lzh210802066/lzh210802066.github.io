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



Matplotlib 通常与[Numpy]({% post_url skill/2025-10-24-numpy %}) 和 [Scipy]({% post_url skill/2025-10-24-scipy %})一起使用，这种组合广泛用于替代 MatLab，是一个强大的科学计算环境。






## 一、pyplot

### plot()：用于绘制线图和散点图
Pyplot 是 Matplotlib 的子库，提供了和 MATLAB 类似的绘图 API。


未声明哪一画板，就近原则，无则自动创建；
未声明哪一画布，就近原则，无则自动创建；

<table>
       <tr>
            <td>
                    结构
            </td>
            <td>
                面对对象风格 
            </td>
            <td>
                面对过程风格（就近原则）
            </td>
        </tr>
        <tr>
            <td>
                figure-画板
            </td>
             <td>
                  <span style="color:#007acc">figure1</span>=plt.figure(figsize(1,1)) 
             </td>
             <td>
                   plt.figure(figsize(1,1)) <br> （可隐式创建画板）
             </td>
        </tr>
        <tr>
            <td>
                axes-画布 
            </td>
             <td>
                  <span style="color:#007acc">axes1</span>=plt.subplot(2,2,1) 
             </td>
             <td>
                   plt.subplot(2,2,1) <br>（可隐式创建画布）
             </td>
        </tr>
        <tr>
             <td>
                  title-标题 
             </td>
             <td>
                  <span style="color:#007acc">axes1</span>.set_title() 
             </td>
             <td>
                  plt.title()
             </td>
        </tr>
        <tr>
             <td>
                 axis-轴 <br> ( axislabel-轴标签 )
             </td>
             <td>
                  <span style="color:#007acc">axes1</span>.set_xlabel()  
             </td>
             <td>
                  plt.xlabel()
             </td>
        </tr>
        <tr>
             <td>
                  tickes-刻度 <br>( ticklabel-刻度标签 )
             </td>
             <td>
                   <span style="color:#007acc">axes1</span>.set_xticks()        # x轴刻度位置<br>
                   <span style="color:#007acc">axes1</span>.set_xticklabels()   # x轴刻度标签
             </td>
             <td>
                 plt.xticks()# 刻度位置+标签
             </td>
        </tr>
        <tr>
             <td>
                  刻度限 
             </td>
             <td>
                  axes1.set_xlim()<br>axes1.axis([0, 10, -1, 2])
             </td>
             <td>
                  plt.xlim(x.min(),x.max()+2)
             </td>
        </tr>
        <tr>
             <td>
                  grid-网格线 
             </td>
             <td>
                  <span style="color:#007acc">axes1</span>.grid()
             </td>
             <td>
                   plt.grid()
             </td>
        </tr>
        <tr>
             <td>
                  legend-图例 
             </td>
             <td>
                  <span style="color:#007acc">axes1</span>.legend()  
             </td>
             <td>
                  plt.legend(['1','2'])  
             </td>
        </tr>
        <tr>
             <td>
                  annotate-注释 
             </td>
             <td>
                  <span style="color:#007acc">axes1</span>.annotate()  
             </td>
             <td>
                  plt.annotate()
             </td>
        </tr>
        <tr>
             <td>
                   绘制图像
             </td>
             <td>
                  <span style="color:#007acc">axes1</span>.plot() 
             </td>
             <td>
                  plt.plot()
             </td>
        </tr>
        <tr>
             <td>
                  显示图像 
             </td>
             <td>
                  plt.show() 
             </td>
             <td>
                  plt.show()
             </td>
        </tr>
</table>





```python

import matplotlib.pyplot as plt
import numpy as np

from matplotlib import rcParams

# 设置中文字体（Windows 系统常用“SimHei”黑体） 
rcParams['font.sans-serif'] = ['SimHei'] 

# 解决负号显示问题
rcParams['axes.unicode_minus'] = False  

#全局画布颜色，白色 ; 浅灰 lightgray
plt.rcParams['axes.facecolor'] = 'w' 
   
#显示绘图的静态图像
%matplotlib inline 




x = np.arange(0, np.pi*2, 0.05)
y1 = np.sin(x)
y2 = np.cos(x)

#========================面对对象风格========================


#========================面对过程风格========================

# 设置画板 
# plt.figure(figsize=(width, height), dpi=resolution)
# 图表宽度和高度（英寸）; 图表每英寸点数（分辨率）,默认为 100。

# 单条线: plt.plot ( [x], y, [fmt], *, data=None, **kwargs )
# 多条线: plt.plot ( [x], y, [fmt], [x2], y2, [fmt2], ..., **kwargs )


# - 实线 | : 虚线  | -- 破折线 |  -. 点划线

# r 红色 | g 绿色 | b 蓝色 | c 青色 | m 品红 | y 黄色 | k 黑色 | w 白色

# . 点 | , 像素点 | o 实心圆 | v 下三角 | ^ 上三角 | < 左三角 | > 右三角 
# 1 下三叉 | 2 上三叉 | 3 左三叉 | 4 右三叉 
# 8 八角形 | s 正方形 | p 五边形 | * 星号 | h 六边形1 | H 六边形2 
# + 加号 | x 乘号 | D 菱形 | d 瘦菱形 | | 竖线 | _ 横线 



#网格线: matplotlib.pyplot.grid(b=None, which='major', axis='both', )
#参数说明：
#b：可选，默认为 None，可设置布尔值，true 为显示，false 为不显示，如果设置 **kwargs 参数，则值为 true。
#which：可选，可选值有 'major'、'minor' 和 'both'，默认为 'major'，表示应用更改的网格线。
#axis：可选， 'both'（默认），'x' （x 轴方向）或 'y'（ y 轴方向）。
#**kwargs：可选，设置网格样式，可以是 color='r', linestyle='-' 和 linewidth=2，分别表示网格线的颜色，样式和宽度。

# 设置画布
#==============================================
#==============================================
# 绘制多个子图
# 法一：subplot() 
# subplot(nrows, ncols, index, **kwargs)

# 法二：subplots() 
# fig, axes = plt.subplots(nrows=2, ncols=2)
# plt.subplots()返回值为(元组) : (figure,axes_array)
# 也可 fig,(axes1,axes2)
# axes[0, 0].plot([1, 2, 3], [1, 4, 9])  



plt.subplot(2, 2, 1)
plt.plot(x,y1,label='First Line')
plt.title("plot 1")        #画布标题
plt.xlabel("x - label")   #x轴标签
plt.ylabel("y1 - label")   #y轴标签
plt.legend() 

plt.subplot(2, 2, 2)
plt.plot(x,y2,label='Second Line')
plt.title("plot 2")        #画布标题
plt.xlabel("x - label")   #x轴标签
plt.ylabel("y2 - label")   #y轴标签

plt.suptitle("Test")   #画板标题
#==============================================
#==============================================


#在plt.show()前,用来标示图形的文本标签图例
# 方式一
# plt.plot(x,y1,label='1') 
# plt.plot(x,y2,label='2') 
# plt.legend() 

# 方式二
# axes1=plt.plot(x,y1) 
# axes2=plt.plot(x,y2)  
# plt.legend([axes1,axes2],['1','2']) 

# 方式三
# axes1=plt.plot(x,y1,label='1') 
# axes2=plt.plot(x,y2,label='2') 
#plt.legend(handles=[axes1, axes2])

# 在一个 axes 中添加多个图例

plt.legend() 



plt.savefig('.\lineplot.svg',dpi = 500)
#保存与屏幕上显示的图形完全相同的图形，则应在调用 show() 之前调用 savefig()，否则将保存空文件。

# plt.savefig(fname, dpi=None, bbox_inches='tight', pad_inches=0.1, format=None, kwargs)

# fname − 要保存图形的文件名或路径。文件扩展名决定文件格式，例如 ".png"、".pdf"。
# dpi − 每英寸点数，即保存图形的分辨率。默认为 "None"，使用 Matplotlib 默认值。
# bbox_inches − 指定要保存图形的哪一部分。选项包括 'tight'、'standard' 或以英寸为单位指定的边界框。
# pad_inches − 当 bbox_inches='tight' 时，图形周围的填充。
# format − 显式指定文件格式。如果为 'None'，则从 fname 中的文件扩展名推断格式。
# kwargs − 特定于所选文件格式的其他关键字参数。


plt.show()
```



图像函数

Imread    将图像从文件读取到数组中。

Imsave    将数组保存为图像文件。

Imshow    在坐标轴上显示图像。







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
                 格式字符串，快速设置基本格式（如颜色、标记和线条样式）<br>默认“-b”，无标记实线蓝色。
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
                **kwargs key word args(可选)
            </td>
            <td>
                 其他关键字参数，<br>精细控制属性
            </td>
            <td>
                 marker: 标记样式<br>linestyle: 线条样式  <br>color: 颜色
            </td>
            <td>
                 markersize（简写 ms）: 标记大小，默认为 6<br>markerfacecolor（简写 mfc）:标记内部颜色<br>markeredgecolor（简写 mec）:标记边框颜色<br><br>linewidth（lw）: 线宽  <br>    <br> label: 图例标签
            </td>
        </tr>
</table>






### 从文件加载数据

```python

import matplotlib.pyplot as plt

import csv           #方法一 : csv
import numpy as np   #方法二 ：numpy

#===================方法一=========================
x1=[]
y1=[]

with open('example.txt','r')as csvfile:
    plots csv.reader(csvfile,delimiter=',')
    for row in plots:
        x1.append(int(row[0]))
        y1.append(int(row[1]))

#CSV读取器自动按行分割文件，然后使用分隔符分割文件中的数据。
#注意：csv模块和csv reader不需要文件在字面上是一个.csv文件，
#可以是任何具有分隔数据的简单的文本文件。

plt.plot(x1,y1,label='Loaded from file!')

plt.xlabel('x1')
plt.ylabel('y1')
plt.title('Interesting Graph\ncheck it out')

plt.legend（）
plt.show（）


#===================方法二=========================
x2, y2 = np.loadtxt('example.txt', delimiter=',', unpack=True)
#loadtxt函数不要求文件是一个.txt文件，可以是.csv,python列表对象。

plt.plot(x2,y2, label='Loaded from file!')

plt.xlabel('x2')
plt.ylabel('y2')
plt.title('Interesting Graph\nCheck it out')

plt.legend（）
p1t.show（）

```




### 从网络加载数据

读取网站的源代码，然后通过简单的拆分来分离数据。



```python


```


色标
Matplotlib 库提供了一个用于处理色标的工具，包括其创建、放置和自定义。

matplotlib.colorbar 模块负责创建色标，但是可以使用Figure.colorbar() 或其等效的 pyplot 包装器pyplot.colorbar() 函数创建色标。这些函数在内部使用 Colorbar 类以及make_axes_gridspec（用于 GridSpec 定位的轴）或make_axes（用于非 GridSpec 定位的轴）。

并且色标需要是一个“可映射” (即 matplotlib.cm.ScalarMappable) 对象，通常是通过 imshow() 函数生成的 AxesImage。如果您想在没有附加图像的情况下创建色标，则可以使用没有关联数据的 ScalarMappable。


颜色表示格式

RGB 或 RGBA 元组
(0.1 ,0.2,0.3)

十六进制 RGB 或 RGBA 字符串
'#0F0F0F' 

灰度级字符串
'0.7' (范围 [0,1])

命名颜色
“b”：蓝色，“g”：绿色，“r”：红色，































