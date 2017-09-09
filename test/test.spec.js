var assert = require("assert");
// var chai = require("chai");

describe('ArrayTest', () => {
    describe('indesOf test', () => {
        it('값이 없을때는 -1을 리턴함 ', function () {
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        });
        
    });
});

describe('비동기 코드 테스트', () => {
    describe('#setTimeout', () => {
        it('2초이내에 완료되지 않으면 실패', (done) => {
            setTimeout(function () {
                done();
            }, 1500);
        }) 
    })
});

describe('다양한 hooks', () => {
    before(() => {
        //이 블록내의 테스트들을 실행하기에 앞서 한번 실행되는 부분.
    });

    after(() => {
        //이 블록내의 테스트들을 모두 실행한 후에 한번 실행되는 부분.
    });

    beforeEach(() => {
        //이 블록내의 각 테스트들이 실행되기전에 실행.
    });

    afterEach(() => {
        //이 블록내의 각 테스트들이 실행된 후 실행.
    });
});

describe('Test suit2', function () {
  it('should be ok', function () {
    assert.equal(true, true);
  });
});

describe('Test suit', function () {
  var arr;

  before('Create the array', function () {
    arr = [0, 1, 2];
  });

  after('Destory the array', function () {
    arr = undefined;
  });

  it('should be ok', function () {
    assert.equal(arr[0], 0);
  });
});