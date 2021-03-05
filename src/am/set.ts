/*
 * @Author: LimingQi
 * @Date: 2021-03-06 01:31:58
 * @LastEditTime: 2021-03-06 01:45:13
 * @LastEditors: LimingQi
 * @Description: 将数据格式设置为AM格式
 * @FilePath: /daily-js/src/arr-map/set.ts
 * Github: https://github.com/Qolim
 */

import { AMType, ObjsonType } from "../types";

/**
 * 将数据设置为AM数据格式
 * @param data 需要被转换的值 stirng｜any[]|objson
 * @returns AM数据
 */
export function toAM(
  data: string | any[] | ObjsonType
): AMType<any, number | string> {
  return (
    typeof data === "string"
      ? data.split("").map((v, i) => [v, i])
      : Array.isArray(data)
        ? data.map((v, i) => [v, i])
        : Object.keys(data).map(k => [data[k], k])
  )
}