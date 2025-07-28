class Heap {
  #arr;
  constructor(cb) {
    this.#arr = [];
    this.comparator = cb;
  }

  insert(data) {
    this.#arr.push(data);
    this.upheapify(this.#arr.length - 1);
  }

  swap(i, j) {
    const tem = this.#arr[i];
    this.#arr[i] = this.#arr[j];
    this.#arr[j] = tem;
  }

  get() {
    if (this.#arr.length > 0) return this.#arr[0];
    else return undefined;
  }

  pop() {
    // this strategies is use full when we have max/min heap and you just need to set the value and make the heap again , here we know top value is max or min , swap with last and run the downHeapify without that index
    this.swap(0, this.#arr.length - 1);
    this.#arr.pop();
    this.downheapify(0);
  }

  heapSort() {
    let n = this.#arr.length;
    // Build heap (rearrange array) , time complexity is O(n) for this 
    for (let i = parseInt(n - 1); i >= 0; i--) {
      this.downheapify(i);
    }

    // One by one extract an element from heap , time complexity is O(nlogn),[NOTE] if we have frequency or know only k element need to push then we need to tranverse n and heapify for k
    //  so time complexity is O(nlogk) , n is the no of element to tranverse , k is the size of the heap . 
    for (let i = n - 1; i >= 0; i--) {
      // Move current root to end
      let temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;

      // call max heapify on the reduced heap
      this.downheapify(0, i);
    }
  }

  upheapify(idx) {
    // time complexity is O(LogN) it is good approach when we push the value everytime , and we don't need to look different subtree it affect the subtree till the root ,
    // one of the best way to build the min/max heap , tranverse the array and push the value inside , that time complexity will be O(nlogN) because upheapify(logn) + tranverse the array(n)
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.comparator(this.#arr[idx], this.#arr[parent]))
        this.swap(idx, parent);
      else break;
      idx = parent;
    }
  }

  downheapify(idx, n = this.#arr.length) {
    while (idx < this.#arr.length) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;
      let result = idx;
      if (left < n && this.comparator(this.#arr[left], this.#arr[result]))
        result = left;
      if (right < n && this.comparator(this.#arr[right], this.#arr[result]))
        result = right;
      if (result === idx) break;
      this.swap(idx, result);
      idx = result;
    }
    // console.log(this.#arr)
  }
  display() {
    console.log(this.#arr, "display");
  }
}

let heap = new Heap((a, b) => a <= b);

heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(6);
heap.insert(7);
heap.insert(2);
heap.insert(6);
heap.display();

// [3,2,3,1,2,4,5,5,6]

// 3,
// 2,3
// 2,3,3
// 1,2,3,3
// 2,2,3,3
// 2,3,3,4
// 3,3,4,5
// 3,4,5,5
// 4,5,5,6
// 3,3,4,5
// 4,5,5,6
