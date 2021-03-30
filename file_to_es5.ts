import { parse } from "@babel/parser"
import * as babel from "@babel/core"
import * as fs from 'fs'


const code = fs.readFileSync('./test.js').toString()
const ast = parse(code, { sourceType: 'module' })
// transformFromAstSync 这个方法可以把ast变成code
// 传入原始的ast, 原始的code，这样就能生成map
const result = babel.transformFromAstSync(ast, code, {
  presets: ['@babel/preset-env']
})

fs.writeFileSync('./test.es5.js', result.code)