import User from '../models/User.js';

// Get all users
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new user
export const addUser = async (req, res) => {
    const { name, email, dateOfBirth } = req.body;

    const user = new User({ name, email, dateOfBirth });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a user
export const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.dateOfBirth = req.body.dateOfBirth || user.dateOfBirth;

        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a user
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        await User.deleteOne({ _id: req.params.id });
        res.json({ message: 'User removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
