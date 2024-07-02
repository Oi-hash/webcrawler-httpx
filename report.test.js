const { sortPages } = require('./report.js')
const { test,expect }  = require('@jest/globals')


test('sortPages # ', () => {
    const input = {
        'https://blog.boot.dev/test1': 1,
        'https://boot.dev': 3,
        'https://blog.boot.dev': 2,
        'https://blog.boot.dev/test2': 5,
        'https://blog.boot.dev/test3': 8,
        'https://blog.boot.dev/test4': 9,
    }
    const actual = sortPages(input)
    const expected = [
        ['https://blog.boot.dev/test4', 9],
        ['https://blog.boot.dev/test3', 8],
        ['https://blog.boot.dev/test2', 5],
        ['https://boot.dev', 3],
        ['https://blog.boot.dev', 2],
        ['https://blog.boot.dev/test1', 1],
    ]
    expect(actual).toEqual(expected)
})

