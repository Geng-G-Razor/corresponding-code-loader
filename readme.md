### 一个简单的webpack-loader

主要作用时，根据不同的项目，对源文件进行处理，输出所需的代码。

只有两种类型，merchant和ops，如：


    {{__merchant_start__}}
    这是一段商户代码
    {{__merchant_end__}}

    {{__ops_start__}}
    这是一段ops代码
    {{__ops_end__}}
