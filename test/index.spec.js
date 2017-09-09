// import request from 'supertest';
// import { increment } from '../actions/index';
// require('Mocha');

describe('ArrayTest11', () => {
    describe('indesOf test', () => {
        it('값이 없을때는 -1을 리턴함 ', function () {
            // assert.equal(-1, [1,2,3].indexOf(5));
            // assert.equal(-1, [1,2,3].indexOf(0));
        });
        
    });

    console.log('window : ? ' + typeof window);
});


function* customGenerator() {
    yield 1;
    yield 'zero';
    yield ['nero', 'hero'];
}

function* deliverGenerator() {
    console.log('generator called');
    let val = yield;
    console.log('1st', val);
    val = yield 2;
    console.log('2nd', val);
    val = yield;
    console.log('3rd', val);
}