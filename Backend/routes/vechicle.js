const router = require("express").Router();
const Vehicle = require('../modals/Vechicle');

//CREATE Vehicle
router.post("/", async (req, res) => {


  let code = 1;
  try {
        const newVehicle = new Vehicle({
          vid : req.body.vid,
          license_plate : req.body.license_plate,
          license_type : req.body.license_type,
          vehicle_type : req.body.vehicle_type,
          name : req.body.name,
          contact_number : req.body.contact_number,
          code : req.body.code,
         
        });

        const {license_plate,contact_number} = req.body;

        if(contact_number.length >10){
          return res.status(400).json({msg : "A number must contain 10 digits"});
        }
       
        const existingUser = await Vehicle.findOne({license_plate:license_plate});
        if(existingUser)
        return res.status(400).json({msg : "An account with this Number plate already exists."});
        
    
        
        const vehiclecount = await Vehicle.find().sort({ _id: -1 }).limit(1)
        if (vehiclecount.length > 0)
          code += vehiclecount[0].code
        newVehicle.vid = 'VID00' + code;
        newVehicle.code = code;

        try {
          const savedVehicle = await newVehicle.save();
          res.status(200).json(savedVehicle);
        } catch (err) {
          res.status(500).json(err);
        }


  } catch (error) {
    console.log(error)
  }

});

//UPDATE Vehicle
router.put("/update/:vid", async (req, res) => {
  try {
    const updatedVehicle = await Vehicle.findOneAndUpdate({ 'vid': req.params.vid },
      {
        $set: req.body
      }, { new: true }
    );
    res.status(200).json(updatedVehicle);

  } catch (err) {
    res.status(500).json(err);
  }
})


//DELETE Vehicle
router.delete("/delete/:vid", async (req, res) => {
  try {
    const vehicle = await Vehicle.findOneAndDelete({ 'vid': req.params.vid });
    try {
      await vehicle.delete();
      res.status(200).json("Vehicle has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/',async(req,res)=>{
  try {
    const users = await Vehicle.find();
    res.status(200).json(users);
   
} catch (error) {
  res.status(404).json({ message: error });
}

})

//GET Vehicle DETAILS
router.get("/:vid", async (req, res) => {
  try {
    const vehicle = await Vehicle.findOne({ 'vid': req.params.vid });
    res.status(200).json(vehicle);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET VIEW ALL Vehicle DETAILS
router.get("/", async (req, res) => {
  try {
    const vehicle = await Vehicle.find();
    res.status(200).json(vehicle);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;