# !/bin/sh
npm run docs:build
#进入到dist目录
cd docs/.vuepress/dist/
#初始化
git init
#增加
git add .
#提交
git commit -m 'deploy'
#推送远程
git push -f https://github.com/xiaojun90/blog.git master:gh-pages