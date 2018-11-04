const router = require('koa-router')()
const path = require('path')
const fs = require("fs");

const filePath = path.join(__dirname, "../", "../", "src/mock/");
function render(page) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath + page, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}

router.post('/api/medal/list.do', async (ctx, next) => {
  let html = await render("medalList.do");
  ctx.body = html
})








// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 21!'
//   })
// })

// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string1'
// })

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

module.exports = router
