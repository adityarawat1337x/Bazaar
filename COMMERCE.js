// Use this sample to create your own voice commands
intent('hello world', p => {
    p.play('(hello|hi there)');
});

intent('(view|open|show) (me|) (the|) (cart|bag)', p => {
    p.play('Opening cart');
    p.play({command:'open-cart'});
});

intent('(go|goto) (back|home)', p => {
    p.play('Going Back');
    p.play({command:'go-back'});
});

intent('(clear|empty) (bag|cart)', p => {
    p.play('Clearing Bag');
    p.play({command:'empty-cart'});
});
/*
const indexContext = context(()=>{
    follow("$(ID NUMBER) $(ID2 NUMBER)", p =>{
        p.play({command:"add-item", payload: {id:p.ID.number}})
        p.play({command:"add-item", payload: {id:p.ID2.number}})
        p.resolve()
    })
    
    fallback("Please state an item ID.")
})
*/
intent('(add|put) (product|item) (number|) $(ID NUMBER) (in|to) (the|) (cart|bag) ', p => {
    p.play(`Adding item number ${p.ID.number} to the cart`)
    p.play({command:"add-item", payload: {id:p.ID.number}})
});

intent('(add|put) (product|item) (number|) $(ID NUMBER) and  $(ID2 NUMBER) (in|to) (the|) (cart|bag) ', p => {
    p.play(`Adding item number ${p.ID.number} and ${p.ID2.number}  to the cart`)
    p.play({command:"add-item", payload: {id:p.ID.number}})
    p.play({command:"add-item", payload: {id:p.ID2.number}})
});

intent('(add|put) (product|item) (number|) $(ID NUMBER), $(ID2 NUMBER) and  $(ID3 NUMBER) (in|to) (the|) (cart|bag) ', p => {
    p.play(`Adding item number ${p.ID.number}, (${p.ID2.number}|) and ${p.ID3.number} to the cart`)
    p.play({command:"add-item", payload: {id:p.ID.number}})
    p.play({command:"add-item", payload: {id:p.ID2.number}})
    p.play({command:"add-item", payload: {id:p.ID3.number}})
});