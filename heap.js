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
    this.swap(0, this.#arr.length - 1);
    this.#arr.pop();
    this.downheapify(0);
  }
  
  upheapify(idx) {
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.comparator(this.#arr[idx], this.#arr[parent]))
        this.swap(idx, parent);
      else break;
      idx=parent;
    }
  }

  downheapify(idx){
    while(idx<this.#arr.length){
        let left = 2*idx+1;
        let right = 2*idx+2;
        let result=idx;
        if(left <this.#arr.length && this.comparator(this.#arr[left],this.#arr[result]))
        result = left;
        if(right<this.#arr.length && this.comparator(this.#arr[right],this.#arr[result]))
            result = right;
        if(result===idx)
            break;
        this.swap(idx,result);
        idx=result;
    }
    // console.log(this.#arr)
  }
  display(){
    console.log(this.#arr,'display')
  }
}

let heap = new Heap((a,b)=>a<=b);

heap.insert(3);
heap.insert(2);
heap.insert(3);
heap.insert(1);

heap.pop();
heap.insert(2);

heap.pop();

heap.insert(4);
// heap.display();
heap.pop();
// heap.display();

heap.insert(5);


heap.pop();
heap.insert(5);

heap.pop();
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