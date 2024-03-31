import { getCounterValue } from "./getCounterValue"

describe('getCounterValue', ()=>{
    test('selector with empty state', ()=>{
        expect(getCounterValue({})).toBe(0)
    })

    test('selector with filled state', ()=>{
        expect(getCounterValue({counter: {
            value: 100
        }})).toBe(100)
    })
})