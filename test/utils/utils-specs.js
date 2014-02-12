requirejs.config({
    "paths": {
      "jquery": "http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min",
      "sinon": "http://cdnjs.cloudflare.com/ajax/libs/sinon.js/1.7.3/sinon-min"
    }
});
define([
  "src/utils/util",
], function(
  util
){
  'use strict'
  describe("Implementing revealing module pattern", function() {
    beforeEach(function(){
      sinon.spy($, 'ajax')
    })
    afterEach(function(){
      $.ajax.restore()
    })

    it("should check that ajax is a function", function() {
      expect(util.ajax).to.exist
    });
    it("should check that calling ajax returns ajax call", function(){
      expect(util.ajax() ).to.equal('ajax call')
    })
    it("should check that ajax endpoint is defined", function() {
      expect(util.ajax.endpoint).to.exist
    });
    it("should check that endpoint returns url", function(){
      expect(util.ajax.endpoint('testurl' ) ).to.equal('testurl')
    })
    it("should check that endpoint makes an ajax call", function(){
      util.ajax.endpoint('./data.json')
      expect($.ajax.calledOnce).to.be.true
    })
    it("should check that ajax setup is defined", function(){
      expect(util.ajax.setup).to.exist
    })
    it("should check that ajax setup accepts an argument", function(){
      expect(util.ajax.setup('arg') ).to.equal('arg')
    })
    it("should check that ajax is setup with url when passed", function(){
      expect(util.ajax.setup({'url':'urlval'}) ).to.equal('urlval')
    })
    it("should check that jquery exists", function(){
      expect($).to.not.be.undefined
    })

  });

});
