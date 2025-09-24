<script setup lang="ts">
interface Props {
  foo: string,
  bar?: number
}

const props = defineProps<Props>()
let valueA: string = 'ac123'
console.log('props', props)
const emit = defineEmits<{
update: [value: string]
}>()

function onUpdate():void {
  emit('update', valueA)
}
</script>
<template>
  <div>
    <h2>child {{ foo }}</h2>
    <button @click="onUpdate()">change me</button>
  </div>
</template>