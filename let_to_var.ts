import { parse } from "@babel/parser"
import traverse from "@babel/traverse"
import generate from "@babel/generator"

const code = `let a = 'let'; let b = 2`
// code变成ast
const ast = parse(code, { sourceType: 'module' })

// 遍历整个ast，回调函数enter,ast变成ast2
traverse(ast, {
  enter: item => {
    if(item.node.type === 'VariableDeclaration'){
      if(item.node.kind ==='let') {
        item.node.kind = 'var'
      }
    }
  } 
})

// ast2 转成code2
const result = generate(ast, {}, code)
console.log('22222', result.code)
