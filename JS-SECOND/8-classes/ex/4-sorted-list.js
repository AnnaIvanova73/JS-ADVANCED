class List {
    constructor() {
        this.list = [];
        this.size = this._size();
    };

    add(element) {
        this.list.push(element);
        this._sortList()
        this.size = this._size();
    };

    remove(index) {
        this._checkForIndexOutsideList(index);
        this.list.splice(index, 1);
        this.size = this._size();
    };

    get(index) {
        this._checkForIndexOutsideList(index);
        return this.list[index];
    };

    _size(){
        return typeof this.list.length === 'undefined' ? 0 : this.list.length;
    };
    _checkForIndexOutsideList(index) {
        if (index < 0 || index >= this.list.length) {
            throw {
                message: `Index out of bounds for index ${index}`,
                lengthCollection: this.list.length,
            };
        }
    };
    _sortList(){
        this.list = this.list.sort((a,b) => a-b);
    };
}
let list = new List();

list.add(7);

list.add(6);

list.add(5);
console.log(list)
console.log(list.get(1));

list.remove(1);

console.log(list.get(1));