  import express from "express";
  import sample from "./sample.json"

  const app = express();

  app.use(express.json());
  
/* check params check */

 app.get("/sample/:id" , (req,res) => {
  const id = Number(req.params.id);

  const user = sample.find((user) => user.id === id);

  if(!user){
    return res.status(404).json({
      message : "User are not found"
    });
  }
  return res.status(200).json(user)
 })

/* check query params check */

  app.get("/sample" , (req,res) => {
    const active = req.query.active;

    if(active === "true"){
      const activeUsers = sample.filter((user) => user.active === true);
      return res.status(200).json(activeUsers);
    }
    if(active === "false"){
      const inActiveUsers = sample.filter((user) => user.active === false);
      return res.status(200).json(inActiveUsers)
    }
    res.status(200).json(sample)
  })
 /* create new use check */
  

  app.listen(5000, () => {
          console.log("Server is running on  port 5000")
  });