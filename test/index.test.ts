import {hello} from './../src/index'

describe('Test index file', () => {

    test('test hello world function' , () => {
        hello('world')
    })
})