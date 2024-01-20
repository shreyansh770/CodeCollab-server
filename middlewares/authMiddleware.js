
const authorized = (req,res,next)=>{


    try {
        let isAuthorized = true;
        if(isAuthorized){
            next();
        }else{
            res.status(401).json({ error: "Unauthorized" });
        }
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}