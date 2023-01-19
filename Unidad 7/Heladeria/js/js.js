let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid:["water", "ice"],
    holder:["cone", "cup","strick"],
    toppings:["chocolate", "peanuts"],
};



let is_shop_open = true;

function time(ms) {
    return new Promise ((resolve, reject) => {

        if (is_shop_open) {
            setTimeout(resolve, ms);
        }
        else{
            reject(console.log("Shop is closed"));
        }
    });
};

async function kitchen() {
    
    try{
        await time (2000)
        console.log(`${stocks.fruits[0]} was selected`);
        await time(0000)
        console.log(`Production has started`);
        await time(2000)
        console.log('Fruit has been chooped');
        await time(1000)
        console.log(`${liquid[0]} and ${liquid[1]} added`)
        await time(1000)
        console.log('start the machine')
        await time(2000)
        console.log(`ice cream placed on ${stocks.holder[1]}`)
    
        await time(3000)
        console.log(`${stocks.toppings[0]} as toppings`)
    
        await time(2000)
        console.log("Serve Ice Cream")
    }
    catch(error){
        console.log('customer left',error);
    }
    finally{
        console.log('Day ended, shop is closed');
    }
}

kitchen();