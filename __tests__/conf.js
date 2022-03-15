


test( 'Configuration read test', async () => {
    
    const { COLOR } = require( 'conf-dot-json' )
    expect( COLOR ).toBe( 'skyblue' )
    
})


test( 'Missed option test', async () => {
    
    const { SIZE } = require( 'conf-dot-json' )
    expect( SIZE ).toBeUndefined(  )
    
})