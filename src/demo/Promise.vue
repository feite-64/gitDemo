<template>

  <div></div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
//手写promise
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

</script>

<style scoped lang='scss'>

</style>