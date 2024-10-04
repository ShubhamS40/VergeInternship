const { User } = require("../models/userModel");

const handleSignup = async (req, res) => {
    const { First_Name, Last_Name, Contact_No, Email } = req.body;
    try {
        if (!First_Name || !Last_Name || !Contact_No || !Email) {
          
            res.status(400).json({ message: "All fields are required", success: false });
        } else {
            const data = await User.create({
                First_Name: First_Name,
                Last_Name: Last_Name,
                Contact_No: Contact_No,
                Email: Email 
            });
            res.status(200).json({ users: data, success: true });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error", success: false });
    }
};

module.exports = {
    handleSignup
};