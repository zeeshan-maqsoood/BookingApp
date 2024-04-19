let orderId=1;
const orders=[]

const createOrder=(req,res)=>{
    try {
        console.log(req.body)
        const venueStartTime = 8; 
        const venueEndTime = 26; 
        

        const { amount,currentTime } = req.body;
        const currentHour = new Date(currentTime).getHours();
        
        if (currentHour > venueStartTime && currentHour < venueEndTime) {
            const order = {
                id: orderId++,
                amount: parseFloat(amount),
                timestamp: new Date().toISOString() 
            };
            orders.push(order); 
            res.json(orders);
            console.log(orders, "order");
        } else {
            res.status(400).json({ error: "Venue is closed for orders." });
        }

    } catch (error) {
        
    }
}


module.exports={createOrder}