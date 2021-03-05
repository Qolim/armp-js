/*
 * @Author: LimingQi
 * @Date: 2021-03-06 01:26:53
 * @LastEditTime: 2021-03-06 02:28:45
 * @LastEditors: LimingQi
 * @Description: AM类定义
 * @FilePath: /daily-js/src/am/index.ts
 * Github: https://github.com/Qolim
 */

import { AMItemType, AMType, ObjsonType } from "../types";
import { toAM } from "./set";

export class AM<V = any, K = number | string> {


  constructor(data?: string | any[] | ObjsonType) {
    data && (this.data = toAM(data) as any)
  }

  public data: AMType<V, K> = []

  public set<SV = any, SK = K>(data: string | any[] | ObjsonType): AM<SV, SK> {
    this.data = toAM(data) as any
    return this as any
  }

  public each(fn: (v: V, k: K) => void): AM<V, K> {
    for (let i = 0; i < this.data.length; i++)
      fn(this.data[i][0], this.data[i][1])
    return this
  }

  public map<MV = any, MK = K>(fn: (v: V, k: K) => AMItemType<MV, MK> | MV): AM<MV, MK> {
    this.data = this.data.map(item => {
      const ret = fn(item[0], item[1])
      return (
        Array.isArray(ret) && (ret[1] as any) === item[1]
          ? ret
          : [ret, item[1]]
      )
    }) as any
    return this as any
  }

  public filter(fn: (v: V, k: K) => boolean): AM<V, K> {
    this.data = this.data.filter(item => fn(item[0], item[1]))
    return this as any
  }

  public getMap(): Map<K, V> {
    return new Map(this.data.map(item => [item[1], item[0]]))
  }

  public getObjson(): ObjsonType<V> {
    return this.data.reduce((pre, cur) => ({
      ...pre, [String(cur[1])]: cur[0]
    }), {})
  }

  public getStr(): string {
    return this.data.map(item => item[0]).join("")
  }

  public getArr(): V[] {
    return this.data.map(item => item[0])
  }

}