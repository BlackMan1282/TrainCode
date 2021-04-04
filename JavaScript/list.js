/* 
   | * * | * * | * * |
   |  js链表结构操作  |
   | * * | * * | * * |
*/
function Node(element){
	this.element = element // 当前节点数据
	this.next = null       // 后继节点
}

// 定义头结点
function LList(){
	this.head = new Node("head"); // 头结点
}
LList.prototype = {
	// 查找节点
	find(item){
		var currNode = this.head;
		while (currNode.element != item) { // while循环会在指定条件为真时循环执行代码块,当前节点不是要查找的item节点就往下找
			currNode = currNode.next;
		}
		return currNode;
	};
	// 指定元素后插入节点
	inserf (newElement, item) {
		var newNode = new Node(newElement);
		var currNode = this.find(item); // 查找到要在指点节点的下标
		newNode.next = currNode.next;   // 要插入的新节点后继指定为指定节点的后继， 
		currNode.next = newNode;        // 指定节点的后继为新节点
		// A -> B
		// A -> new -> B
	};
	// 查找某一节点的前驱
	findPrevious(item){
		var currNode = this.head;
		while( !(currNode.next == null) && (currNode.next.element != item)) {
			// 后继节点不是为null并且后继节点是为item的时候，就为当前要查找的前驱		A -> B
			currNode = currNode.next;
		}
		return currNode;
	};
	// 删除节点
	remove(item){
		var prevNode = this.findPrevious(item)
		if (!(prevNode.next == null)) {
			prevNode.next = prevNode.next.next;
		}
	};
	// 修改节点数据
	edit(item, newItem){
		var element = this.find(item);
		element.element = newItem
	}
}