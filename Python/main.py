#一、基本数据类型#
    counter = 100      # 整型  **只有一个整数类型 int
    miles   = 100.0    # 浮点型变量
    name    = "Runder" # 字符串
    complex            # 复数

    #多变量赋值
        a = b = c = d = 1  #从后向前赋值
        a = b = c = 1, 2, "Runder" #可以赋值不同类型

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
        del var_a, var_b

    ##String 字符串
        str = 'Runder'
        # 索引以0开始，-1为末尾开始位置
        str[2:5]        #截取,输出从第三个开始到第五个的字符
        print(str * 2)  #输出字符串两次

    ##List列表     "数组"
        # 索引值以0开始，-1为末尾开始位置
        listData = ['a','b','c','d']
        tiny = [1222,'rund']
        print(listData + tiny)   #从末尾拼接  ['a','b','c','d', 1222,'rund']
        print(listData[1:4:2])   #第三个参数为截取的步长  第三个为复数表现为逆向读取

        # list内置方法  append()   pop()

        ##Tuble (元组)    元组与列表相似，不同之处在于元组的元素不能修改，元组写在小括号里边，元素之间用逗号隔开。
        tuble = ('abd',895,2.23)
        tinytuple = (123,'runood')
        tup = (12,)  #一个元素要在后边加逗号

    ##Set集合   基本功能是进行成员关系此时和删除重复元素，可以使用大括号{ }或者set()函数创建函数集合，
                # 创建一个空函数必须用set()而不是{ }，因为{}是用来创建一个空字典
        parame = {value01,value02,}
        # 或者
        set(value)

        # 案例
        sites = {'google','taobao','runoob','facebook','zhihu','baidu'}

        print(sites)  #输出集合

        #成员测试
        if 'runoob' in sites :
            print('runoob在集合中')
        else :
            print('runoob你不在集合中')

        #set可以进行集合运算
        a = set('abracadabra')
        b = ser('alacazam')

        print(a - b)  #a 和 b的差集
        print(a | b)  #a 和 b的并集
        print(a & b)  #a 和 b的交集
        print(a ^ b)  #a 和 b中不同时存在的元素

    ##Dictionaty    字典    字典是python中另一个非常有趣的内置数据类型
                # 列表是有序的对象集合，字典是无序的，两者区别在于:字典中的元素是通过键来存取的，不是通过偏移存取。
                #字典是一种映射类型，字典用{}标识，他是一个无序的键(key):值(value)的集合  键(key)必须使用不可变类型
                # 在同一个字典中，键(key)必须是唯一的。

        dict = {}
        dict['one'] = '1 - python'
        dict[2]     = '2 - python'

        tinydict = {'name':'runoob','code':1,'site':'www.baidu.com'}

        print(tintdict.keys())   #输出所有键
        print(tinydict.values()) #输出所有值

    ##Python数据类型转换
        int(x[,base])           #将x转换为一个整数
        float(x)                #将x转换到一个浮点数
        complex(real[,imag])    #创建一个复数
        str(x)                  #将对象x转换为字符串
        repr(x)                 #将x转换为表达式字符串
        eval(str)               #用来计算在字符串中的有效Python表达式，并且返回一个对象
        tuple(s)                #将序列s转化为一个元组
        list(s)                 #将序列s转化为一个列表
        set(s)                  #转化为可变集合
        dict(s)                 #创建一个字典，d必须是一个(key:value)元组序列
        frozenset(s)            #转化为不可变集合
        chr(d)                  #将整数转化为一个字符
        ord(x)                  #将一个字符串转为他的整数值
        hex(x)                  #将整数转化为一个十六进制的字符串
        oct(x)                  #将一个整数转化为一个八进制字符串

# ============================================================================================

###Python控制工具
    ##if语句
        if cond:
            statemant
        elif condetion:
            statement
        else:
            statement
        
        var1 = 100
        if var1:
            print('1-if表达式')
        
    ##while循环语句
        n = 100
        s = 0
        counter = 1
        while counter <= n:
            s = s + counter
            counter += 1
        print('1 到 %d 之和为: %d' %(n,s))
        # 扩展  
            # %s        为打印字符串(用str()的显示)
            # %r        为打印字符串(用repr()显示)
            # %b        为二进制整数
            # %d        为打印十进制整数
            # %f        为打印浮点数
            # %.2f      为打印浮点数(2为指定小数点位数)
            # %8.2f     为占位符宽度
            # %-8.2f    为指定占位符宽度(左对齐)
            # %08d      为指定占位符(用0当占位符)
            # %e        为打印基数(基底写e)
        
        while <expr>:
            <statement(s)>
        else:
            <additional(s)>
        
        # 循环输出数字
        count = 0
        while count < 5:
            print (count, '小于5')
            count = count + 1
        else:
            print (count, '大于或者等于5')

    ###迭代器   这是Python最强大的功能之一，是访问集合元素的一种方式  
                # (看起来很哇塞的样子，你使劲吹，反正我不知道，等我学完再回来看你)


