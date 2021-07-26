git fetch

lastCommit=$(cat last-commit.info)
current=$(git rev-parse main)

if [[ $current != $lastCommit ]]
then
  echo '---커밋변경 배포절차 실행---'
  echo '---git pull---'
  git pull

  echo '---client build---'
  cd ./client
  npm run build

  echo '---server build---'
  cd ../server
  npm run build
  
  echo '---pm2 reload account---'
  pm2 reload index
  # pm2 reload account
  # 기존 커밋 덮어쓰기
  echo '---update lastCommit.info---'
  cd ..
  echo $current > last-commit.info
fi
