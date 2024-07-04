const {crawlPage} = require('./crawl.js')
const {printReport} = require('./report.js')

async function main() {
    if (process.argv.length < 3 ) {
        console.log(`[!]Missing website[!]`)
        process.exit(1)
    }
    if (process.argv.length > 3) {
        console.log(`[!]Too many command line args [Max: 3]`)
        process.exit(1)
    }

    const baseURL = process.argv[2]

    console.log(`Crawl start: ${baseURL}`)
    const start = performance.now()
    const pages = await crawlPage(baseURL, baseURL, {})
    const end = performance.now()

    
    printReport(pages)
    console.log(`=================================================`)
    console.log(`# Crawl time: ${((end - start) / 1000 / 60 / 60).
    toFixed(0)} h ${((end - start) / 1000 / 60).toFixed(0)} m ${((end - start) / 1000).toFixed(3)} s`)
    console.log(`=================================================`)
}
main()
