const {normalizeURL} = require('./crawl.js')
const {test,expect}  = require('@jest/globals')


test('normalizeURL # Strip protocol [URL constructor]', () => {
    const input = 'https://blog.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normalizeURL # Trailing slash strip [Logic]', () => {
    const input = 'https://blog.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})


test('normalizeURL # Capitals [URL constructor]', () => {
    const input = 'https://blog.BOOT.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normalizeURL # Http strip [URL constructor]', () => {
    const input = 'http://blog.BOOT.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normalizeURL # Https strip [URL constructor]', () => {
    const input = 'https://blog.BOOT.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})



