# blog


## 블로그 소개
1. 소개
- 본 블로그는 코인(COIN)의 공동 블로그입니다.
- 블로그는 코인 맴버들이 직접 코딩하여 개발합니다.

2. 컨텐츠
- 블로그에 등록되는 컨텐츠는 코인 맴버가 직접 작성한 글이거나
- 코인 맴버 간에 도움이 될 것으로 기대되는 블로그 / 기사 / 기타 글이 주요 컨텐츠가 됩니다. 
- 직접 작성한 글은 개인적으로 혹은 그룹으로 공부하고 있는 개발 관련 기술 / 팁 / 생각에 대한 글입니다.

3. 블로그 기술 스택
- 기본적으로 Github Pages를 이용하여 호스팅합니다.
- HTML, CSS, JavaScript 세가지 언어를 기본적으로 사용합니다.
- 추가적으로 React를 기반으로 한 컴포넌트를 작성하여 특정 페이지 및 일부 기능을 모듈화 할 수도 있습니다.

[참고 - 메타블로그 '이상한 모임'](https://blog.weirdx.io/)

## React로 사용하는 방법
1. JavsScript 트랜스파일
- `babel --preset react,es2015 docs/src/javascript/source -d docs/src/javascript/build`

2. JavaScript 패키징
- `browserify docs/src/javascript/build/app.js -o docs/bundle.js`

3. CSS 패키징
- `cat docs/src/stylesheet/*/* docs/src/stylesheet/*.css | sed 's/..\/..\//src\//g'  > docs/bundle.css`
