<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import Child from '../views/Child.vue';

const count = ref(0)

const double = computed<number>(() => count.value * 2)
// any

let value1
value1 = 12
value1 = 'ab'

// error
let value2 = 23
value2 = 50

// js - practice

let name: string = 'bob'
let num: number = 123
let n: null = null
let un: undefined = undefined
let anyEl: any = true
let boo: boolean = true

// array
let arr: number[] = [1,2,3,4]
let arr2: string[][] = [['aa', 'bb']]
let arr3: Array<number> = [1, 2, 3]

  interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];

// tuple
let tuple1: [number, string, boolean] = [1, 'a', true]

// 聯合
let str: string | number
str = 123

// interface

interface Person {
  name: string,
  age: number,
  blood?: string
  [propName: string]: any; // 允許有任意的屬性
}

let tom12: Person = {
  name: 'tom',
  age: 25,
}

// func


function sum(x: number, y: number): number {
  return x + y
}

let mySum = function (x: number, y: number): number {
  return x + y
}

const add = (a: number, b:number): number => a + b
// const add2 = (a, b) => a + b

// type func

type Greet = (name: string, age: number) => string
const greet: Greet = (name, age) => {
  return `Hello ${name}, your age is ${age}.`;
}

// type interface

interface greet2 {
  (name: string, age: number): string
}


const greet2: Greet = (name, age) => {
  return `Hello ${name}, your age is ${age}.`;
};

// 可選 必須放後面

function buildName(firstName: string, lastName?: string) {
if (lastName) {
    return firstName + ' ' + lastName;
  } else {
    return firstName;
  }
}

let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

// 型別推論
function getLength(something: string | number): number {
  return (<string>something).length;
  // 方法2  return (something as string).length;
}

// element type
const input = document.querySelector<HTMLInputElement>('.input')
input?.value

// vue

let strA = ref<string>('sfdsf')

strA.value = 'ad'

function onChange(val: string): void {
  strA.value = val
}

interface people {
  name: string,
  age: number
}

const personA = reactive<people>({
  name: 'tommy',
  age: 30
})


</script>

<template>
  <Child :foo="strA" @update="onChange" />
  <input type="text">
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
