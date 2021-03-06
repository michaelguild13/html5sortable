/* global describe,test,expect */
import index from '../src/index'

describe('Testing index', () => {
  test('element is not in DOM', () => {
    // setup
    let div = window.document.createElement('div')
    // assert
    expect(index(div)).toEqual(-1)
  })

  test('element is child of div', () => {
    // setup
    let div = window.document.createElement('div')
    let child1 = window.document.createElement('div')
    let child2 = window.document.createElement('div')
    div.appendChild(child1)
    div.appendChild(child2)
    // assert
    expect(index(child1)).toEqual(0)
    expect(index(child2)).toEqual(1)
  })
})
