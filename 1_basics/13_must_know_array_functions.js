/**
 * Array Functions
 */
let iveMemvers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMemvers);

//push()
console.log(iveMemvers.push('코드팩토리'));
console.log(iveMemvers);

console.log('--------------');
//pop() 끝의 인덱스 내용을 삭제하고 그 값을 반환
console.log(iveMemvers.pop());
console.log(iveMemvers);

console.log('--------------');
//shift() pop과 반대로 인덱스 0번을 삭제 후 값을 반환
console.log(iveMemvers.shift());
console.log(iveMemvers);

//unshift() push와 비슷하지만 맨 앞부분 인덱스에 추가를 함.
console.log(iveMemvers.unshift('안유진'));
console.log(iveMemvers);

//splice 첫번째 파라미터엔 삭제하고 싶은 인덱스의 값, 두번째 파라미터는 첫번째 파라미터부터 어디까지인지
//그 후 삭제된걸 반환하고 결과값을 반한함.
console.log(iveMemvers.splice(0, 3));
console.log(iveMemvers);

iveMemvers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMemvers);

//concat() 새로운 어레이를 만들어서 반환 즉 원래 어레이에서 변경된게 아님
console.log(iveMemvers.concat('코드팩토리'));
console.log(iveMemvers);

//slice() 0번 인덱스 부터 3번 인덱스까지 잘라옴 원래 어레이는 변경된게 아님
console.log(iveMemvers.slice(0, 3));
console.log(iveMemvers);

//spread operator
let iveMemvers2 = [
    ...iveMemvers,
];
console.log(iveMemvers2);

let iveMemvers3 = [
    iveMemvers,
];
console.log(iveMemvers3);

console.log('----------------');
let iveMemvers4 = iveMemvers;

console.log(iveMemvers4);
console.log(iveMemvers4 === iveMemvers);

// console.log([
//     ...iveMemvers,
// ] === iveMemvers);

//join 모든 값들을 string으로 엮을때 사용
console.log(iveMemvers.join());
console.log(iveMemvers.join('/'));
console.log(iveMemvers.join(', '));

//sort()
//오름차순
iveMemvers.sort();
console.log(iveMemvers);

//reverse()
//내림차순
console.log(iveMemvers.reverse());

let numbers = [
    1,
    9,
    7,
    5,
    3
];
console.log(numbers);

// a, b를 비교 했을때
// 1) a를 b보다 나중에 정렬 하려면(뒤에 두려면) 0보다 큰 숫자를 반환
// 2) a를 b 보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers);

//map()
console.log('----------------');
console.log(iveMemvers.map((x) => x));
console.log(iveMemvers.map((x) => `아이브: ${x}`));

console.log(iveMemvers.map((x) => {
    if(x === '안유진') {
        return `아이브: ${x}`;
    } else {
        return x;
    }
}));
console.log(iveMemvers);

// filter() 참조값이 ture이면 해당값을 킵 false이면 해당값을 킵 하지 않음
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => x % 2 === 0));

//find() 가장 첫번째로 해당하는 값만 반환
console.log(numbers.find((x) => x % 2 === 0));

//findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));

//reduce()
console.log(numbers.reduce((p, n) => p + n ,0));

//reduce() 퀴즈
//reduce() 함수를 사용해서 iveMembers 변수에 있는 모든 스트링 값들의
//길이를 더해서 반환하라.
//참고로 string의 길이는 .length를 이용해서 구할 수 있다.
console.log(iveMemvers.reduce((p, n) => p + n.length, 0));