## 问题描述

装配线调度问题如下：

Colonel汽车公司在有两条装配线的工厂内生产汽车，一个汽车底盘在进入每一条装配线后，在每个装配站会在汽车底盘上安装不同的部件，最后完成的汽车从装配线的末端离开。如下图1所示。

![](https://nciyuan.oss-cn-beijing.aliyuncs.com/img/20220417225059.png#id=WfcCR&originHeight=297&originWidth=857&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

每一条装配线上有n个装配站，编号为$j$=1,2,...,$n$，将装配线$i$（$i$为1或2）的第j个装配站表示为S($i$，$j$)。装配线1的第$j$个站$S$(1，$j$)和装配线2的第j个站S(2，$j$)**执行相同的功能**。然而这些装配站是在不同的时间建造的，并且采用了不同的技术，因此，每个站上完成装配**所需要的时间不相同**，即使是在两条装配线上相同位置的装配站也是这样。**把每个装配站上所需要的装配时间记为a(**$i$**，**$j$**)，底盘进入装配线i需要的时间为e(**$i$**)，离开装配线**$i$**需要的时间是**$x$**(**$i$**)**。正常情况下，底盘从一条装配线的上一个站移到下一个站所花费的时间可以忽略，但是偶尔也会将未完成的底盘从一条装配线的一个站移到另一条装配线的下一站，比如遇到紧急订单的时候。假设将已经通过装配站S($i$，$j$)的底盘从装配线$i$移走到另一条装配线所花费的时间为t($i$，$j$)。

现在的问题是要确定在装配线1内选择哪些站以及在装配线2内选择哪些站，以使汽车通过工厂的总时间最小。

## 例子

在该例中，最快总时间是选择装配线1的装配站1，3，6以及装配线2的装配站2，4，5。

![](https://nciyuan.oss-cn-beijing.aliyuncs.com/img/U00f45f7129d3487897e1dec3c0c774c6D.jpg#id=X1RQz&originHeight=564&originWidth=950&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

## 算法步骤

### 描述最优解结构

首先思考我们想要找到从起始点到装配站$S_{1,j}$的`最快路线`，如果这条`最快路线`通过了$S_{1,j-1}$，那么，从起始点到$S_{1,j-1}$的路线一定是最快路线(_因为如果有更快的就走更快的了_)。

也就是说，我们开始思考的问题(从起始点到装配站$S_{1,j}$的`最快路线`)包含了子问题(从起始点到装配站$S_{1,j-1}$的`最快路线`)，我们称这个性质为`最优子结构`，也就是说，可以通过找出子问题的最优解来构造原问题的一个最优解。

我们可以想到，从起始点到装配站$S_{1,j}$的最快路线，一定是经过装配线$S_{1,j-1}$或$S_{2,j-1}$。

### 递归定义最优解的值

#### 计算$f_i[1]$

在该问题上，我们将从**起始点通过两条装配线到装配站**$j$**的最快路线问题**作为子问题，$j$=1，2，...，$n$。令$f_i[j]$表示从起始点通过两条装配线到装配站$S_{i,j}$的最快时间，$f^*$表示从起始点到终点的最快时间($f^*$=min($f_1[n]+x_1,f_2[n]+x_2$))。结合上面的图：

$f_1[1]=e_1+a_{1,1}$
$f_2[1]=e_2+a_{2,1}$

#### 计算$f_i[其他 ]$

再计算$f_i[j]$，$i$=1，2   $j$=2，3，...，$n$

$f_1[j]$的最快路线必然是通过$f_1[j-1]$或者$f_2[j-1]$到达$f_i[j]$。那么：

$f_1[j]$=min($f_1[j-1]+a_{1,j},f_2[j-1]+a_{1,j}+t_{2,j-1}$)

$f_2[j]$=min($f_2[j-1]+a_{2,j},f_1[j-1]+a_{2,j}+t_{1,j-1}$)

```latex
E=mc^2
```
#### 结论

![](https://nciyuan.oss-cn-beijing.aliyuncs.com/img/Ub75dc585df194e55827aa9ceca7416baE.jpg#id=Ljr9Z&originHeight=153&originWidth=765&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

#### $l$数组

![](https://nciyuan.oss-cn-beijing.aliyuncs.com/img/U00f45f7129d3487897e1dec3c0c774c6D.jpg#id=URwj2&originHeight=564&originWidth=950&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

这里说明一下$l$数组，我们定义$l_i[j]$为装配线的编号(1 or 2)，看着路线，往$l$数组里填装配线的编号。
$l^*$里填$f_i[n]$用的装配线的编号。因为35<37，所以我们选择$i$=1

1. 最后经过$S_{1,6}$，所以在$l^*$填1
2. 经过$S_{2,5}$，所以在$l_1[6]$填2
3. 经过$S_{2,4}$，所以在$l_1[5]$填1
4. 经过$S_{1,3}$，所以在$l_1[4]$填1
5. 经过$S_{2,2}$，所以在$l_1[3]$填2
6. 经过$S_{1,1}$，所以在$l_1[2]$填1

### 按自底向上的方法计算最优解的值

因为$f_i[j]$的每一个值仅依赖于$f_1[j-1]$和$f_2[j-1]$的值，所以我们以递增装配站编号$j$的顺序来计算$f_i[j]$的值就可以在Θ($n$)时间内计算出结果。伪代码：

![](https://nciyuan.oss-cn-beijing.aliyuncs.com/img/U627bc1ee5c32404b8d961b2b9073e9acc.jpg#id=CoXOh&originHeight=591&originWidth=571&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

### 由计算出的结果构造一个最优解

计算出$f_i[j]$，$f^*$，$l_i[j]$，$l^*$之后，我们很容易输出各个装配站

#### 站号以递减顺序

![](https://nciyuan.oss-cn-beijing.aliyuncs.com/img/U26f082577ecb4e969986b2327dd23a08l.jpg#id=ibhGT&originHeight=538&originWidth=457&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

#### 站号以递增顺序(递归)

![](https://nciyuan.oss-cn-beijing.aliyuncs.com/img/Ufb40e79816b142928653cd615f744275L.jpg#id=gooYc&originHeight=693&originWidth=636&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

## c++代码实现

```cpp
#include<iostream>
using namespace std;
int a[3][100]; //a[1][j]表示底盘在装配线s[1][j]所用时间
int t[3][100]; //t[1][j]表示底盘从s[1][j]移动到s[2][j+1]所用时间
int n;//装配站的数目
int e1,e2; //进入装配线1,2时间
int x1,x2;// 离开时间

int f1[100],f2[100];

int L1[100],L2[100]; 
//L1[j]记录第一条装配线上,最优解时第j个装配站的前一个装配站是第一条线还是第二条线上
int f,L;  //最优解是f,最小花费时间,L代表最后是从哪里出来的

void fastest_way()
{
    f1[1]=e1+a[1][1];
    f2[1]=e2+a[2][1];
    for(int j=2;j<=n;j++)
    {
        if((f1[j-1]+a[1][j])<(f2[j-1]+t[2][j-1]+a[1][j]))
        {
            f1[j]=f1[j-1]+a[1][j];
            L1[j]=1;
        }
        else
        {
            f1[j]=f2[j-1]+t[2][j-1]+a[1][j];
            L1[j]=2;
        }
            if((f2[j-1]+a[2][j])<(f1[j-1]+t[1][j-1]+a[2][j]))
        {
            f2[j]=f2[j-1]+a[2][j];
            L2[j]=2;
        }
        else
        {
            f2[j]=f1[j-1]+t[1][j-1]+a[2][j];
            L2[j]=1;
        }
    }
    

        if((f1[n]+x1)<=(f2[n]+x2))
        {
            f=f1[n]+x1;
            L=1;
        }
        else
        {
            f=f2[n]+x2;
            L=2;
        }
     
}


void print_station()
{
    int i=L;
    cout<<endl<<"line "<<L<<"  Station "<<n<<endl;
    for(int j=n;j>=2;j--)
    {
        if(i==1)
            i=L1[j];
        else
            i=L2[j];
        cout<<"line "<<i<<"  Station "<<j-1<<endl;
    }
}


int main()
{
    freopen("station.txt","r",stdin); //可以有文件来输入
    cout<<"请输入装配站的数目\n";
    cin>>n;
    cout<<"请输入进入装配线1,2所需时间";
    cin>>e1>>e2;
    cout<<"请输入离开装配线1,2所需时间";
    cin>>x1>>x2;
    cout<<"输入装配线1上各站加工时所需时间a1[j]";
    for(int j=1;j<=n;j++)
        cin>>a[1][j];
    cout<<"输入装配线2上各站加工时所需时间a1[j]";
    for(int j=1;j<=n;j++)
        cin>>a[2][j];
    cout<<"请输入装配线1上的站到装配线2上的站所需时间t[1][j]";
    for(int j=1;j<n;j++) //j<n
        cin>>t[1][j];
    cout<<"请输入装配线2上的站到装配线1上的站所需时间t[2][j]";
    for(int j=1;j<n;j++) //j<n
        cin>>t[2][j];

    fastest_way();
    print_station();

    return 0;
}
```
