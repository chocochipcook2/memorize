const fs = require('fs');

fs.readFile('./localDataEdit/first.txt', (err, data) => {
  if (err) throw err;
  let pages = data.toString().split('{'); // 13pages = ['', 01 변압기, 02 수변전설비, ... , 13 기출- ]
  let chapters = [];
  let bunches = [];
  let answers = [];
  let questions = [];

  let url = '';
  // console.log(pages[1]);
  pages.forEach((element) => {
    //console.log('11@@@@@@@@', element);
    chapters.push(element.split('}')[0]); //chapters : 01 변압기 02 수・변전설비 03 전기공사 04 전동기 05 전선로 06 접지 07 조명 08 축전지 09 콘덴서 10 퓨즈 11 피뢰기, 서지흡수기 12 기타 13 2021년 기출 단답
    bunches.push(element.split('}')[1]); //전기기사/전기산업기사 21년 단답 기출문제 중 앞의 주제별 단답 정리에 수록되지 않은 문제들만 추가로 정리하였습니다. Q1. 접지저항의 결정요인인 접지저항 요소 3가지를 쓰시오. _  1 접지도체와 접지전극이 가지는 자체의 전기저항  2 접지전극의 표면과 대지 사이의 접촉저항  3 접지전극 주위의 토양이 가지는 전기저항(대지저항률에 의해 정해지는 전기저항) Q2. 다음은 지중케이블의 사고점 측정법과 절연의 건전도를 측정하는 방법을 열거한 것이다. 다음 방법들 을 구분하여 답하시오. _  1 Megger법 2 tanδ법 3 부분 방전 측정법 4 Murray Loop법 5 Capacity Bridge법 6 Pulse radar법  (1) 사고점 측정법 ☞ 4, 5, 6 (2)절연열화측정법 ☞1,2,3 Q3. 피뢰시스템의 특성은 보호대상 구조물의 특성과 고려되는 피뢰레벨에 따라 결정된다. 위험성 평가를 기초로 요구되는 피뢰시스템의 등급을 선택하여야 하는데, 피뢰시스템의 등급과 관계가 있는 데이터와 피뢰시스템의 등급과 관계없는 데이터를 구분하여 기호로 답하시오.
  });
  bunches.forEach((e, idx) => {
    let _ques;
    //console.log(e);

    _ques = String(e).split('Q');

    //console.log(_ques[1]);
    _ques.forEach((v, i) => {
      let _obj = {};
      let _str = v.split('_');
      //console.log('hello : ', _str);
      _obj[_str[0]] = _str[1];
      //console.log(_obj);
      questions.push(_obj);
    });
    //console.log(_ques.length);
  });

  //console.log(questions.length);//372
  //console.log(bunches.length);
  //console.log(questions[2]);
  //chapters.forEach((e) => console.log('chapters :', e));
  //bunches.forEach((e) => console.log('bunches :', e));
});
