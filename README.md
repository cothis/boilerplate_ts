# 명아주 boilerplate

Webpack, babel Client & Server BoilerPlate code for Typescript

---

## install

root, client, server 각 폴더에서 yarn install 을 해야합니다. (yarn 은 npm 으로 대체 가능합니다.)

```
yarn install
```

```
cd client
yarn install
```

```
cd server
yarn install
```

---

## 개발 모드 실행

### client, server 동시 실행

```
yarn run start
```

### client 단독 실행

```
cd client
yarn run dev
```

### server 단독 실행

```
cd server
yarn run dev
```

---

## 배포 모드 실행

### 배포

```
cd client
yarn run build
```

```
cd server
yarn run build
yarn run start
```

### 배포 종료

```
npx pm2 kill
```
