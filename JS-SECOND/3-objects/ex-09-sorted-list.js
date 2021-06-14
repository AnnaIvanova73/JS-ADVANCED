function createSortedList() {

    return {
        _list: [],
        size: 0,
        add: function (element) {
            this._list.push(element)
            this._sort();
            this.size = this._updateSize()
        },

        remove: function (index) {
            this._list = this._list.filter((_, i) => i !== index);
            this._sort();
            this.size = this._updateSize()
        },

        get: function (index) {
            return this._list[index];
        },

        _updateSize: function () {
            return this._list.length
        },

        _sort() {
            this._list = this._list.sort((a, b) => a - b)
        }
    }

}

let list = createSortedList();

list.add(5);

list.add(6);
list.add(10)
list.add(-1)
list.add(7);


console.log(list.get(1));

list.remove(-1);

console.log(list.get(1));
console.log(list)