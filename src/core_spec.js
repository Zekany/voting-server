it('converts to immutable', () => {
  const state = Map()
  const entries = ['Trainspotting', '28 Days Later']
  const nextState = setEntries(state, entries)
  expect(nextState).to.equal(Map({
    entries: List.of('Trainspotting', '28 Days Later')
  }))
})
