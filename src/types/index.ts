/*
 * @Author: LimingQi
 * @Date: 2021-03-06 00:57:11
 * @LastEditTime: 2021-03-06 01:57:22
 * @LastEditors: LimingQi
 * @Description:类型文件
 * @FilePath: /daily-js/src/types/index.ts
 * Github: https://github.com/Qolim
 */

export type AMItemType<V = any, K = number | string> = [V, K]

export type AMType<V = any, K = number | string> = AMItemType<V, K>[]

export type ObjsonType<V = any> = { [name: string]: V }