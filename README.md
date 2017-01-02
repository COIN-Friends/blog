# blog


### JavsScript 트랜스파일
- `babel --preset react,es2015 docs/src/javascript/source -d docs/src/javascript/build`

### JavaScript 패키징
- `browserify docs/src/javascript/build/app.js -o docs/bundle.js`

### CSS 패키징
- `cat docs/src/stylesheet/*/* docs/src/stylesheet/*.css | sed 's/..\/..\//src\//g'  > docs/bundle.css`
