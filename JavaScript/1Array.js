/* 
	js数组操作方法  数组是特例的一种对象
*/
/*创建数组方法*/
	new Array();
	new Array(size);
	new Array(element0, element1, ..., elementn);

let arr = [1,5,9,6,3,4,8,5]
// 数组迭代方法，为每个方法调用一次函数
*Array.forEach()
	var txt = " ";
	var numbers = [45, 4, 9, 16, 25];
	numbers.forEach(myFunction);

	function myFunction(value, index, array) {
	  txt = txt + value + "<br>";
	}


	
一、插入新数据到数组
   	1.push();// push方法向数组末尾添加一个或者多个元素，并且返回新数组的长度
   		let arr = [1,5,9,6,3,4,8,5]
		console.log(arr.push(0,1,1), arr)  // (11), [1, 5, 9, 6, 3, 4, 8, 5, 0, 1, 1]

	2.unshift(); //从数组开始添加一个或者多个元素，并且返回新数组长度
		// 和shift正好相反
		let arr = [1,5,9,6,3,4,8,5]
		console.log(arr.unshift(0,2),arr) // (10), [0, 2, 1, 5, 9, 6, 3, 4, 8, 5]
		
	3.pop(); // 删除并且返回数组最后一个元素
		let arr = [1,5,9,6,3,4,8,5]
		console.log(arr.pop(),arr) // (7), [1, 5, 9, 6, 3, 4, 8]
	
	4.splice();  // 删除元素，并且向数组添加新元素
	// 功能：从数组中删除元素、插入元素到数组中或者同时完成这两种操作。
	// 输入：第一个参数为指定插入或删除的起始位置，第二个参数为要删除的个数。之后的参数表示需要插入到数组中的元素 
	// 如果只有一个参数，默认删除参数后边的所有元素。
	// 输出：返回一个由删除元素组成的数组。
	// 注意：新建了一个数组，并修改了原数组
	// 0,3,2  从0开始删除3个元素，然后插入2
	console.log(arr.splice(0,3,2),arr)  // [1, 5, 9], [2, 6, 3, 4, 8, 5]

二、删除数组元素
	1.splice();
		let arr = [1,5,9,6,3,4,8,5]
		// 从0开始删除1个元素
		console.log(arr.splice(0,1),arr); // [1]  [5, 9, 6, 3, 4, 8, 5]

	2.shift(); // 删除并且返回数组的第一个元素
		let arr = [1,5,9,6,3,4,8,5]
		arr.shift();  // 1

	3.delete(); // 使用 delete 会在数组留下未定义的空洞。请使用 pop() 或 shift() 取而代之
		let arr = [1,5,9,6,3,4,8,5]
		delete arr[0];  // [undefind,5,9,6,3,4,8,5]

	4.pop(); // pop() 方法从数组中删除最后一个元素

三、查询数组元素
	1.indexOf(); // 查找指定元素，不存在返回 -1，
四、合并数组
	// concat() 方法不会更改现有数组。它总是返回一个新数组。
	// concat() 方法可以使用任意数量的数组参数
	1.concat();
		let myGirls = ["Cecilie", "Lone"];
		let myBoys = ["Emil", "Tobias", "Linus"];
		let myChildren = myGirls.concat(myBoys);   // 连接 myGirls 和 myBoys

	2.reverse(); // 翻转数组
五、顺序操作
	1.sort(); // 排序 
		// 不过，如果数字按照字符串来排序，则 "25" 大于 "100"，因为 "2" 大于 "1"。
		var fruits = ["Banana", "Orange", "Apple", "Mango"];
		// 比值函数
		var points = [40, 100, 1, 5, 25, 10];
		points.sort(function(a, b){return a - b});
		fruits.sort();            // 对 fruits 中的元素进行排序

		var points = [40, 100, 1, 5, 25, 10];
		points.sort(function(a, b){return a - b});
		// 现在 points[0] 包含最低值
		// 而 points[points.length-1] 包含最高值
	
	//查找最高值
	Math.max.apply
	function myArrayMax(arr) {
    	return Math.max.apply(null, arr);
	}
	Math.max.apply([1, 2, 3]) 等于 Math.max(1, 2, 3)
	// 自制方法
	function myArrayMax(arr) {
	    var len = arr.length
	    var max = -Infinity;
	    while (len--) {
	        if (arr[len] > max) {
	            max = arr[len];
	        }
	    }
	    return max;
	}
	// 查找最低值
	Math.min.apply
	function myArrayMin(arr) {
    	return Math.min.apply(null, arr);
	}
	// 数字排序
	var points = [40,20,10,40,50,10,20];
	points.sort(function(a,b){return a - b}) // 升序排列  反则降序

	// 比较函数
	function(a,b){return a-b}
	// 函数对比a b，例如function(40,100),返回 -60(负值)
	// 排序函数把40排序为比100更低的值
	// 也可以对比值的属性，例如a.age
	2.reverse() // 翻转数组
		var fruits = ["Banana", "Orange", "Apple", "Mango"];
		fruits.sort(); // 先排序
		fruits.reverse(); // 反转
六、判断是否是数组类型
	1.typeof();
	2.isArray(); // object
	3.instanceof;
		var a=[];
		console.log(a instanceof Array) //返回true
	4.constructor;
		a.constructor == Array // true
		// 使用instaceof和construcor,被判断的array必须是在当前页面声明的
七、转换类型
	1.toString();
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	document.getElementById("demo").innerHTML = fruits.toString(); // Banana,Orange,Apple,Mango

	2.join();
	var fruits = ["Banana", "Orange","Apple", "Mango"];
	document.getElementById("demo").innerHTML = fruits.join(" * "); // Banana * Orange * Apple * Mango
