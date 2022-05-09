import './About.scss';

export default function About() {
  return (
    <div className="row justify-content-center">
      <div className="about">
        <h1>안녕하세요, 배창현입니다.</h1>
        <p>
          2016년부터 현업에 뛰어든 만 4년 6개월 차, 웹 개발자 배창현입니다. 주로 웹 서비스 개발을 담당하였습니다. <br />
          Vue.js, Nuxt.js, React.js, Spring, Java 기술 등을 활용한 프로젝트에 참여한 실무 경험이 있습니다. 기술 역량을
          키우고자 학습모임 및 지속적인 학습을 통해 부족한 부분을 보완하고자 노력했습니다. 또한, 프로젝트를 진행하면서
          구성원들과 적극적으로 소통하며 협업해왔습니다.
          <br />
          좋은 코드와 설계를 늘 고민하며, 지식을 공유하는 문화를 좋아하는 개발자입니다.
        </p>
        <p>
          해당 프로젝트는 React.js 를 학습 하고자 시작한 간단한 Dashboard 클론코딩 앱 입니다.
          <br />
          로그인 페이지, 가입 페이지, Dashboard 페이지, About 페이지가 작성되어있습니다.(Dashboard 와 About 은 로그인을
          필요로 합니다.)
          <br />
          React.js, SCSS, Recoil, React Router, React-query 가 적용되어 있습니다.
          <br />
          Vite 를 이용하여, 프로젝트를 생성하였습니다. (Rollup.js 기반) <br />
          이번 프로젝트를 진행하면서 좋았던 점은 npm workspace 를 통해서 monorepo 를 구성한 경험과 <br />
          React-query 구성 및 사용 했던점입니다. 비동기 관련 코드가 확실히 줄어드는점과 풍부한 옵션과 기능제공으로
          개발자에게 좋은 개발경험을 제공한다는 생각이 들었습니다. 한편으로는 풍부한 옵션과 기능제공으로 인해 러닝커브가
          어느정도 발생을 하겠구나라는 생각도 들었습니다.(redux-saga 와 비교한다면 부드러울거 같습니다)
          <br />
          프로젝트를 진행하면서, 마지막 빌드단계에서 1일~2일이라는 시간을 소요했습니다. 처음에는 vite 이슈인줄 알았지만
          설정이슈였고 지금은 해결되어 잘 동작이 되고있습니다.
          <br />
          해당 이슈를 해결하기위해서 tsconfig 관련한 검색과 vite 공식 github 저장소에 이슈를 등록하기도 하였습니다.
        </p>
        <p>
          github:
          <a
            href="https://github.com/katanazero86/react-clone"
            style={{ paddingLeft: '8px' }}
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/katanazero86/react-clone
          </a>
        </p>
      </div>
    </div>
  );
}
