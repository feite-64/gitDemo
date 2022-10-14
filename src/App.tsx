import { ref } from 'vue'
let data = ref<string>('hellow TSX')
let flag = ref(true)
let arr = [1, 2, 3, 4]
type props = { title: string }
const readerDom = (props: props, ctx: any) => {
  return (
    <div>
      <div>{props.title}</div>

      <input v-model={data.value} type="text" />
      
      <div v-show={flag}>{data.value}</div>
      
      <div>
        {arr.map((v) => {
          return <div onClick={clickTap.bind(this, ctx, v)}>{v}</div>
        })}
      </div>
    </div>
  )
}
const clickTap = (ctx: any, v: number) => {
  data.value = v + ''
  // e.stopPropagation() //阻止默认事件
  ctx.emit('onClick', 123)
}
export default readerDom
