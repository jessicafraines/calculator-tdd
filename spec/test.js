/* global describe, it */

;(function(){
  'use strict';

  beforeEach(function(){
    previousResult = undefined;
    nextOperation = undefined;
    $('#displayoutput').val('');
  });

  describe('Entering numbers', function(){

    describe('displayoutput', function(){
      it('should return the value of the display', function(){
        $('#displayoutput').val(1.23);
        assert.equal(displayOutput(), 1.23);

        $('#displayoutput').val(2.34);
        assert.equal(displayOutput(), 2.34);
      });
    });

    describe('press', function(){
      it('should display the number pressed', function(){
        assert.equal(displayOutput(), '');
        press(1);
        assert.equal(displayOutput(), 1);
      });
    });

    describe('Entering the decimal number 7 . 8 9', function(){
      it('should display 7.89', function(){
        press(7);
        press('.');
        press(8);
        press(9);
        assert.equal(displayOutput(), 7.89);
      });
    });
  });//entering numbers bracket

  describe('Adding', function () {
    describe('7 . 8 9 + 1 + 2 =', function(){
      it('should be 10.89', function () {
        press(7);
        press('.');
        press(8);
        press(9);
        press('+');
        press(1);
        press('+');
        press(2);
        press('=');
        assert.equal(displayOutput(), '10.89');
      });
    });
    describe('7 . 8 9 + 1 . 0 0 + 2 =', function(){
      it('should be 10.89', function () {
        press(7);
        press('.');
        press(8);
        press(9);
        press('+');
        press(1);
        press('.');
        press(0);
        press(0);
        press('+');
        press(2);
        press('=');
        assert.equal(displayOutput(), '10.89');
      });
    });
    describe('1 + 0 =', function(){
      it('should be 1', function () {
        press(1);
        press('+');
        press(0);
        press('=');
        assert.equal(displayOutput(), '1');
      });
    });
    describe('1 + 0 + 4 =', function(){
      it('should be 5', function () {
        press(1);
        press('+');
        press(0);
        press('+');
        press(4);
        press('=');
        assert.equal(displayOutput(), '5');
      });
    });
    describe('1 + 1 =', function(){
      it('should be 2', function () {
        press(1);
        press('+');
        press(1);
        press('=');
        assert.equal(displayOutput(), '2');
      });
    });
    describe('. 1 + . 2 =', function(){
      it('should be 0.3', function () {
        press('.');
        press(1);
        press('+');
        press('.');
        press(2);
        press('=');
        assert.equal(displayOutput(), '0.3');
      });
    });
  }); //adding close bracket
  
  describe('Subtraction', function () {
    describe('7 . 8 9 - 1 - 2 =', function(){
      it('should be 4.89', function () {
        press(7);
        press('.');
        press(8);
        press(9);
        press('-');
        press(1);
        press('-');
        press(2);
        press('=');
        assert.equal(displayOutput(), '4.89');
      });
    });
    describe('7 . 8 9 - 1 - 0 - 2 =', function(){
      it('should be 4.89', function () {
        press(7);
        press('.');
        press(8);
        press(9);
        press('-');
        press(1);
        press('-');
        press(0);
        press('-');
        press(2);
        press('=');
        assert.equal(displayOutput(), '4.89');
      });
    });
    describe('7 . 8 9 - 1 . 0 0 - 2 =', function(){
      it('should be 4.89', function () {
        press(7);
        press('.');
        press(8);
        press(9);
        press('-');
        press(1);
        press('.');
        press(0);
        press(0);
        press('-');
        press(2);
        press('=');
        assert.equal(displayOutput(), '4.89');
      });
    });
    describe('1 - 1 =', function(){
      it('should be 0', function () {
        press(1);
        press('-');
        press(1);
        press('=');
        assert.equal(displayOutput(), '0');
      });
    });
    describe('. 1 - . 2 =', function(){
      it('should be 0.3', function () {
        press('.');
        press(1);
        press('-');
        press('.');
        press(2);
        press('=');
        assert.equal(displayOutput(), '-0.1');
      });
    });
  }); //subtraction close bracket

  describe('Multiply', function () {
    describe('7 . 8 9 * 2 =', function(){
      it('should be 15.78', function () {
        press(7);
        press('.');
        press(8);
        press(9);
        press('*');
        press(2);
        press('=');
        assert.equal(displayOutput(), '15.78');
      });
    });
    describe('7 . 8 9 * 0 =', function(){
      it('should be 0', function () {
        press(7);
        press('.');
        press(8);
        press(9);
        press('*');
        press(0);
        press('=');
        assert.equal(displayOutput(), '0');
      });
    });
    describe('7 . 8 9 * 0 * 2 =', function(){
      it('should be 0', function () {
        press(7);
        press('.');
        press(8);
        press(9);
        press('*');
        press(0);
        press('*');
        press(2);
        press('=');
        assert.equal(displayOutput(), '0');
      });
    });
    describe('7 . 8 9 * 1 . 0 0 * 2 =', function(){
      it('should be 15.78', function () {
        press(7);
        press('.');
        press(8);
        press(9);
        press('*');
        press(1);
        press('.');
        press(0);
        press(0);
        press('*');
        press(2);
        press('=');
        assert.equal(displayOutput(), '15.78');
      });
    });
    describe('4 * 4 =', function(){
      it('should be 16', function () {
        press(4);
        press('*');
        press(4);
        press('=');
        assert.equal(displayOutput(), '16');
      });
    });
    describe('. 1 * . 2 =', function(){
      it('should be 0.02', function () {
        press('.');
        press(1);
        press('*');
        press('.');
        press(2);
        press('=');
        assert.equal(displayOutput(), '0.02');
      });
    });
  }); //multiply close bracket

  describe('Divide', function () {
    describe('7 . 8 9 / 2 =', function(){
      it('should be 3.945', function () {
        press(7);
        press('.');
        press(8);
        press(9);
        press('/');
        press(2);
        press('=');
        assert.equal(displayOutput(), '3.945');
      });
    });
    describe('8 / 1 / 2 =', function(){
      it('should be 4', function () {
        press(8);
        press('/');
        press(1);
        press('/');
        press(2);
        press('=');
        assert.equal(displayOutput(), '4');
      });
    });
    describe('8 / 4 / 2 =', function(){
      it('should be 1', function () {
        press(8);
        press('/');
        press(4);
        press('/');
        press(2);
        press('=');
        assert.equal(displayOutput(), '1');
      });
    });
    describe('8 / 4 =', function(){
      it('should be 2', function () {
        press(8);
        press('/');
        press(4);
        press('=');
        assert.equal(displayOutput(), '2');
      });
    });
    describe('. 8 / . 2 =', function(){
      it('should be 4', function () {
        press('.');
        press(8);
        press('/');
        press('.');
        press(2);
        press('=');
        assert.equal(displayOutput(), '4');
      });
    });
  }); //divide close bracket

  describe('Clear', function () {
    it('should be 0', function(){
        press('.');
        press(8);
        press('/');
        press('.');
        press(2);
        press('=');
        press('C');
      assert.equal(displayOutput(), '0');
    });  
    it('should be 0', function(){
        press('.');
        press(8);
        press('/');
        press('.');
        press(2);
        press('C');
      assert.equal(displayOutput(), '0');
    });
    it('should be 4', function(){
        press('.');
        press(8);
        press('/');
        press('.');
        press(2);
        press('C');
        press(2);
        press('+');
        press(2);
        press('=');
      assert.equal(displayOutput(), '4');
    });
  }); //clear close bracket


})(); //iife close bracket
