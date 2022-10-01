<template>
  <div>

  </div>
</template>

<script setup lang="ts">
(function (window) {
  function promise(constructor: any) {
    function resolve() {

    }
    function reject() {

    }
    constructor(resolve, reject)
  }
  promise.prototype.then = function (onResolved: any, onRejected: any) {
  }
  promise.prototype.catch = function (onResolved: any) { }
  promise.prototype.faniliy = function (onResolved: any) { }
  promise.resolve = function () { }
  promise.reject = function () { }
  promise.all = function () { }
  promise.race = function () { }
})(window)

// const xhr = new XMLHttpRequest()
// xhr.open('get', "url", true)//建立连接
// xhr.send(null)//发送请求
// xhr.onreadystatechange = function (state) {
//   if (xhr.readyState !== 4) return
//   xhr.status
// }
// const myNew = (constructor: Function, ...args: []) => {
//   //创建空对象并链接原型链
//   let obj = Object.create(constructor.prototype)
//   //this指向实例
//   let result = constructor.bind(obj, args)
//   //判断是否为对象
//   return result instanceof Object ? result : obj
// }
// const user = function (this: any, name: string, age: number) {
//   this.name = name
//   this.age = age
// }
// const xiaoming = myNew(user, '小明', 18)
// console.log(xiaoming);

class A {
  a: any
  b: any
  constructor(a: any, b: any) {
    this.a = a,
      this.b = b
  } 
}
</script>

<style scoped>

</style>