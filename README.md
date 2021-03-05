# armp-js

  let string|any[]|obj to AM(([value,key])[])

## use

  npm i armp-js -S


## api

```typescript

  am.set(string|any[]|object) // 设置数据为AM格式 ([value,key])[]
  
  am.each(fn:(v,k)=>void)//遍历数据

  am.map(fn:(v,k)=>any|[v:any,k:any])//转换数据

  am.filter(fn:(v,k)=>boolean)//过滤数据

  am.getMap()//转换为Map并返回 Map<key,value>

  am.getObjson()//转换诶object并返回 {key:value}

  am.getArr()//转换为数组并返回 value[]

  am.getStr()//转换为字符串并返回 value....

```
