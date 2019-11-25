npm run build
tar -cvf dist.tar.gz ./dist
scp ./dist.tar.gz root@182.254.204.253:/usr/local/nginx/