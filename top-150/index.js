db.orders.aggregate([
    {
        $match:{
            orderDate : {$gt: "2024-07-05"}
        }
    },
    {
        $lookup:{
            from:"customers",
            localField:"customerId",
            foreignField:"_id",
            as:"customerDetails"
        }
    },
    {
        $unwind:"$customerDetails"
    }
]);