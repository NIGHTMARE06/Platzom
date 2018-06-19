const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function() {
  it('if it ends with AR the AR is removed', function() {
    const tr = platzom('programar')
    expect(tr).to.equal('program ')
  })
  it('if it starts with Z, PE is added at the end', function() {
    const tr = platzom('zorro')
    expect(tr).to.equal('zorrope ')
  })
  it('if you have more than ten characters you put one - in the middle', function() {
    const tr = platzom('abecedario')
    expect(tr).to.equal('abece-dario ')
  })
  it('if it is a palindrome, no rule is applied and capitals are interspersed', function() {
    const tr = platzom('Sometemos')
    expect(tr).to.equal('SoMeTeMoS ')
  })
})
