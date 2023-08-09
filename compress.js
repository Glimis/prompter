
var gm = require("gm")
var {glob} = require("glob")

console.log(glob)

async function main() {
    const files = await glob('docs/**/**.png')
    console.log(files)

    for(let i =0;i<files.length;i++){
      await handler(files[i])
    }
}

function handler(filePath) {
    return new Promise((reslove) => {
        gm(filePath)
            .resize(200)
            .write(`${filePath.slice(0, -4) + ".webp"}`, function (err) {
                reslove(1)
            });
    })
}

main()

