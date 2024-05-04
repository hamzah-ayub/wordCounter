#! /usr/bin/env node

import inquirer from "inquirer"

const data = await inquirer.prompt([
    {   message: "Enter string to count words: ",
        type: "string",
        name: "user_string"
    }
])

//console.log(data.user_string)

// remove any trailing or leading whitespaces:
let str = data.user_string.trim()
//console.log(str)

// split the string to an array of words
let words = str.split(/\s+/)
//console.log(words)

let wordCount = words.length
console.log(`Word Count: ${wordCount}`)

let chrStr = data.user_string.trim().replace(/\s+/g, '')
//console.log(`Character String: ${chrStr}`)
//console.log(typeof(chrStr))

let characterCount: number = chrStr.length

console.log(`Character Count: ${characterCount}`)