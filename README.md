# react-clone

---

- node.js : v16.13.2
- npm : 8.4.1

**npm workspace** 로 구성이 되어있습니다.   
packages 내에 각 패키지들이 workspace 에 포함된 패키지입니다.   
root 의 node_modules 에 workspace 전체 의존성을 설치하여, 중복되는 의존성을 최소화 합니다.

해당 기능은 npm v7 부터 도입이 되었습니다.   
`npm i` 을 하게되면, 서로 다른 패키지를 자동으로 link 해줍니다.

```
"node_modules/@zero86/components": {
      "resolved": "packages/components",
      "link": true
    },
    "node_modules/@zero86/react-clone": {
      "resolved": "packages/react-clone",
      "link": true
    },
```

npm v7 부터는 package-lock.json 의 lock version 이 2로 변경되었습니다.
```
{
  "name": "@zero86/react-clone-root",
  "version": "1.0.0",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {
  // 이하 생략
```

lock version 2 의 package-lock.json 은 npm v6 와 역호환됩니다.   
lock version 1 인 경우에 npm v7 으로 install 을 하면 2 형식으로 변경이 되며, 이를 방지하려면 `npm install --no-save` 를 실행하면 됩니다.   
Peer dependencies(피어 종속성) 에서도 npm v7 은 피어 종속성을 자동으로 설치합니다.(이전에는 경고를 표시하고 설치가 되었습니다.)
자동으로 설치하면서 종속성 충돌이 있는 경우에 설치를 차단합니다.   
무시하고 설치를 하려면 `npm i --force` 또는 `npm i --legacy-peer-deps` 명령을 실행하세요.

---

```
├── package.json
├── package-lock.json
├── node_modules
│   ├── @zero86/components -> ./packages/components
│   ├── @zero86/react-clone -> ./packages/react-clone
│   ├── react
│   ├── react-dom
│   └── react
│    // 이하 생략
│   
└── packages
    ├── components
    └── react-clone
```

---

> ### React-clone 소개 <br/>
> React.js, React-router, Recoil, HTML5, CSS3, Vite, SCSS, TypeScript, React-query
- Owner & Maintainer
- github. [https://github.com/katanazero86/react-clone](https://github.com/katanazero86/react-clone)
- Vite 를 이용하여 프로젝트 생성(Node.js >= 12.0.0) : https://vitejs.dev/
- Dashboard 클론코딩 입니다. 처음에 로그인페이지가 뜨면, ID 및 PW 를 입력하고 로그인하면 해당 페이지로 이동합니다.
- npm workspace 로 프로젝트가 구성되어있습니다.(npm 7 버전 이상)
- /packages/components 패키지는 워크스페이스내 패키지들이 공유한 컴포넌트를 관리하는 패키지입니다.
- scss 를 사용했으며, css module 방식으로 작성이 되어있으며 TypeScript 기반으로 컴포넌트와 코드들이 작성되어 있습니다.

---

> - 프로젝트 실행방법(execution)
> ```
> node moudle install : npm i or npm install
> dev : npm run dev
> build : npm run build
> serve:local : npm run serve:local
> ```

---

> ### project 배포(deploy) <br/>
> - https://www.heroku.com/ - 헤로쿠 클라우드 플랫폼을 이용하여 배포
> - 헤로쿠 배포를 위한 express 서버 모듈 설치 및 server/server.js 작성
> - 헤로쿠가 서버를 실행할 수 있도록, package.json 스크립트 추가(`"start": "node ./server/server.js"`)
> - https://react-zero86.herokuapp.com/

---
