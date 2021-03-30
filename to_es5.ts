import { parse } from "@babel/parser"
import * as babel from "@babel/core"

const code = `let a = 'let'; let b = 2; const c = 3;`
const ast = parse(code, { sourceType: 'module' })
// transformFromAstSync 这个方法可以把ast变成code
// 传入原始的ast, 原始的code，这样就能生成map
const result = babel.transformFromAstSync(ast, code, {
  presets: ['@babel/preset-env']
})

console.log(result.code)