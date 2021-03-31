#一、基本数据类型#
    counter = 100     # 整型  **只有一个整数类型 int
    miles   = 100.0   # 浮点型变量
    name    = "runod" # 字符串
    complex           # 复数

    #多变量赋值
    a = b = c = d = 1  #从后向前赋值
    a = b = c = 1,2,"rundoe" #可以赋值不同类型

    number      #数字      不可变
    string      #字符串    不可变
    tuple       #元组      不可变
    list        #列表      可变
    set         #集合      可变
    dictionary  #字典      可变

    # type()  可以查询变量所指的对象类型
    print(type(22.5))

    # 也可以使用isinstance()来判断
    print(isinstance(22,int))

    # type()不会认为子类是一种父类类型
    # isinstance()会认为子类是一种父类类型

    # python2没有布尔类型，python把true和false定义成关键字，值为0和1，可以和数字相加

    # 删除语句 del
    del var_a,var_b

    ##String 字符串
    str = 'Runder'
    # 索引以0开始，-1为末尾开始位置
    str[2:5]        #截取,输出从第三个开始到第五个的字符
    print(str * 2)  #输出字符串两次

    ##List列表     “数组“
    # 索引值以0开始，-1为末尾开始位置
    listData = ['a','b','c','d']
    tiny = [1222,'rund']
    print(listData + tiny)   #从末尾拼接  ['a','b','c','d', 1222,'rund']
    print(listData[1:4:2])   #第三个参数为截取的步长  第三个为复数表现为逆向读取

    # list内置方法  append()   pop()
