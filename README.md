# nodejs

![nodejs](<https://github.com/sera9786/nodejs/blob/master/img/nodejs.JPG>)

이 레퍼지스토리는 nodejs를 더 능숙하게 다루기위해 nodejs를 집중적으로 공부하기위한 레퍼지스토리입니다.



## Nodejs?

* [node?](<https://asfirstalways.tistory.com/43>)	
* [nodejs 특징및 장점](<https://jayzzz.tistory.com/55>)

## nodejs 설치하기

* [nodejs설치 생코](https://opentutorials.org/course/3332/21029)
* [nodejs 사이트](<https://nodejs.org/en/>)
* [visual stdio code](<https://code.visualstudio.com/>) - 여러 IDE가 있지만 제가 추천하는것은 visual stdio code입니다 
  * [js IDE 6가지](<https://nch1234.tistory.com/1351>) - 그냥 자기가 편한거쓰세욤



## 개발환경준비 

터미널에서 npm 으로 packege.json을 생성해주자.	

모두 엔터로 넘어가준다

```
$npm init
```

![init](<https://github.com/sera9786/nodejs/blob/master/img/init.JPG>)

* name : 이 프로젝트의 이름
* version : 현재 생성하는 npm 파일의 버전. 이전에 따로 배포하는 등의 작업이 없었고, 처음이라면 그대로 엔터를 누른다(1.0.0)으로 설정
* description : 수행할 작업에 대해 작성한다. (ex : A tool to generate file for d3 library)
* entry point : app.js가 진입점이된다(미리 만들어 놔야한다) 
* test command : test script에 대해서 정리하려면 꽤 많은 시간을 할애애야하므로, 여기서는 기본 값으로 세
* git repository : github에서 clone 받은 프로젝트라면, 해당 github repository의 주소가 있을 것이다. 만약 그런 경우가 아니라면 자신의 저장소를 작성해도된다.
* keywords : 이러한 프로젝트를 찾고자하는 사람들에게 유용하게 쓰인다. "file", "d3"등의 키워드를 적어보자.
* author : 개인이나 팀이름, 또는 회사이름 등 다양하게 작성하면 된다.
* icense : 라이센스에 대한 내용을 명시한다. 여기에서는 기본적으로 MIT를 설정해본다.



이렇게 package.json이 생성된것을 확인할수있다.

 npm init말고도 질문없이하고싶다면 이렇게 입력하자.

```
$npm init -y
```

![1560949904741](<https://github.com/sera9786/nodejs/blob/master/img/packege.JPG>)

전체적인 디렉토리 구조는 이렇습니다 미리만들지 마시고 앞으로 예제를 만들면서 같이 만들도록해요.(디렉토리 구조는 사람마다 다를수있습니다)

![directory](<https://github.com/sera9786/nodejs/blob/master/img/drectory.JPG>)

## express

위 개발환경준비 부터 시작하겠습니다.

* [express 생활코딩](<https://opentutorials.org/course/3370>)
* [express란?](<https://wikibook.co.kr/article/what-is-expressjs/>)

우선 express를 쓰기위한 모듈이필요합니다 터미널에서 npm을 이용하여 express 모듈을 다운받도록합시다.

```
$ npm i -s express
```

이제 express를 사용하기위한 핵심적이 모듈은 모두 완성되었습니다.

이코드는 hello,world를 출력시키는 코드입니다. 

```
const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send("hello,world");
});

app.listen(3000, function(){
    console.log('running on 3000 port')
});
```

터미널에서 서버를 작동시켜주고 "http://localhost:3000"에 접속하면

```
$node app.js
```

![hello](<https://github.com/sera9786/nodejs/blob/master/img/hello%2Cworld.JPG>)

이렇게 hello,world가 출력되는 웹페이지가 완성됩니다.

### GET

흔히 쓰이는 http 요청 방식에는 GET, POST 두가지가 있습니다. 보통 GET은 정보를 가져오고 POST는 정보를 제출하는데 많이 쓰입니다. 먼저 GET으로 정보를 받는것부터 하겠습니다.

```
var express = require('express');
var app = express();
var url = require('url');

app.get('/',function(req,res){
    var _url = req.url;
    var queryData = url.parse(_url, true).query;
    res.send("id : " + queryData.id +" password : "+ queryData.password);
});

app.listen(3000, function(){
    console.log('running on 3000 port')
});
```

이코드는 queryData에 query를 받아오고 id와 password를 출력시키는 간단한 코드입니다. 여기에선 jquery가 사용되었는데 query는 /?id=sera&password=1234 이부분에서 ?다음에 있는 정보를 가져옵니다. 코드를 실행시키고 이링크에 들어가면 이렇게 id와password가 출력 되는 것 을 확인할수있습니다.                             

![check](<https://github.com/sera9786/nodejs/blob/master/img/GET_check.JPG>)

## POST



## html파일 띄우기

제가 html을 잘하지 않기때문에 여기서는 html을 다루지 않겠습니다. 여기선 nodejs에서 사용되는 템플릿이 무엇이있는지 사용방법이나 프론트를 띄워주는 법을 다루도록 하겠습니다. 

우선 nodejs/public 에 index.html을 만들어줍니다.

![createindex](<https://github.com/sera9786/nodejs/blob/master/img/createindex.JPG>)

html파일이 생성되었으면 기본 구조를 알아야합니다. 우선 doc를 치고 엔터를 누르면 기본적인 구조가 생성됩니다. doc는 document의 줄임말이며 html파일을 생성할때 간편하게 구조를 빠르게 생성할수있습니다.

![doc](<https://github.com/sera9786/nodejs/blob/master/img/doc.JPG>)

html을 기본적으로 할수있다고 생각하고 설명은 건너뛰겠습니다. 저희는 "hello,world"를 보여주는 정적파일을 rendering 해줄겁니다. 

다시 app.js로 넘어와 몇가지 모듈을 추가해줍니다.

````
$npm i path
$npm i ejs
````

그리고 아래있는 코드을 추가해주면됩니다.

첫번째 줄은 세번째줄에있는 path.join으로 경로를 설정 해주기 위해 사용하는 모듈입니다.
두번째 줄은 view engine을 ejs란것으로 설정해줍니다.                                                                                                      세번째 줄은 html파일 위치를 찾아갈수있도록 지정해줍니다.                                                                                             네번째 줄은 서버가 HTML 렌더링을 할 때, EJS 엔진을 사용하도록 설정합니다.

```
var path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
```

이후 app.js를 실행시키고 [localhost:3000/](<http://localhost:3000/>)에 들어가면 hello,world를 확인할수있습니다. 이와 말고도 fs모듈을이용해 html을 보여줄수있습니다.

![hello,world](<https://github.com/sera9786/nodejs/blob/master/img/hello%2Cworld_html.JPG>)

## http

http를쓰기 위해선 http모듈이 필요합니다.

```
$ npm i -s http
```
이코드는 hello world!를 출력하는 http 기본예제입니다.
```
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  //res.setHeader('Content-Type', 'text/html');
  res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

첫번째 코드는 http모듈을 불러오는 코드이고 hostname과 port를 설정해준다.

그리고 status는 200으로보내 성공이란걸 알려주고 serHeader은 text로 해준다. 그리고 Hello world만 출력해주면 된다. console.log에는 hostname을 출력시켜주어 확인하기 편하게 해주고 port번호를 출력해준다. 

이렇게 log창에 뜨면 ctrl+click 으로 들어가주면 "Hello world"가 잘 출력되는것을 확인할수있다.

![http_check](<https://github.com/sera9786/nodejs/blob/master/img/http_check.JPG>)

## 객체

* [전역 객체](<https://opentutorials.org/module/938/6774>)
* [process 객체](https://opentutorials.org/module/938/7189)

## modules
* 모듈 다운로드 방법

``` 
npm i -s ~~ (npm install ~~, npm intall --save ~~ )
```

* npm i 옵션  
	* -S 또는 --save  //  패키지의 Dependencies에 추가됨
	* -D 또는 --save-dev //  패키지의 devDependencies에 추가됨
	* -O 또는 --save-optional //  패키지의 optionalDependencies에 추가됨

* 여기서 Dependencies라는 용어를 보게되는데 이는 설치된 모듈을 의미하며 어떤 어플리케이션을 실행하기 위해서 필요하다는 의미로 디펜던시(Dependencies)라고 부르게됩니다.
  이때 디펜던시는 세 가지로 나뉘어집니다. 어떤 어떤 디펜던시로 추가할 것인지 결정할 수 있습니다.예를들어 -D를 사용하는 경우 개발 환경에서만 필요한 module인 경우 -D 플래그를 사용하게 됩니다. 개발환경에만 필요한 webpack처럼 번들 파일을 생성하거나 linting 등을 수행하는 유틸 기능들의 모듈이 여기에 해당할 수 있습니다.



* 모듈 호출방법

``` 
const ~~ = require('~~');
```



* npm i express :  express를쓰기위한 모듈이다. 
* npm i body-parser : 클라이언트의 HTTP요청중 POST요청의 바디데이터 접근위한 모듈이다.
