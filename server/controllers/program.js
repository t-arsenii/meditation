import programs from "../data/programs.js";
import User from "../models/User.js";
import Result from "../models/Result.js";
import Program from "../models/Program.js";
//get Programs from db
export const insertPrograms= async (req, res) => {
  try {
   
    await Program.insertMany( programs );
    res.json({ msg: "Programs Saved Successfully...!" });
  
} catch (error) {
  res.json({ error })
}
}

//get Programs from db
export const getPrograms= async (req, res) => {
    try {
     
     const p =  await Program.find();
        res.json(p)
    
  } catch (error) {
    res.json({ error })
  }
  }

  //get User Result
  export const getMyResult = async (req, res) => {
    try {
      const user = await User.findById(req.query.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const list = await Promise.all(
        user.result.map((result) => {
          return Result.findById(result._id);
        })
      );
  
      res.json(list);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  };