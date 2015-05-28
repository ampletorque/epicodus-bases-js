describe('bases', function() {

  it("will convert binary to decimal", function() {
    expect(binarize(100)).to.eql(4);
  });

  it("will convert trinary to decimal", function() {
    expect(trinarize(100)).to.eql(9);
  });

  it("will convert hex to decimal", function() {
    expect(hexify("7EB1")).to.eql(32433);
  });

});
