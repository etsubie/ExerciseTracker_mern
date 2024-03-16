import exerciseModel from '../models/exercise.js'

export const fetchExercises = async (req, res) => {
    try {
        const exercises = await exerciseModel.find();
        res.json(exercises);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server Error'});
    }
} ;

export const fetchExercise = async (req, res) => {
    try {
        const {id} = req.params;
        const exercise = await exerciseModel.findById(id);

        if(!exercise){
            return res.status(404).json({message: 'Exercise not found!'});
        }

        res.json(exercise);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server Error'});
    }
};


export const addExercises = async (req, res) => {
    const exercise = req.body;
    const newExercise = new exerciseModel(exercise);

    try {
        await newExercise.save();
        res.status(201).json(newExercise);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Server Error'});
    }
};

export const updateExercise = async (req, res) => {
    const exerciseUpdates = req.body;
    const {id} = req.params;

    try {
        const updatedExercise = await exerciseModel.findByIdAndUpdate(id,exerciseUpdates, {new: true});
        if(!updatedExercise){
            return res.status(404).json({message: 'Exercise not found'});
        }

        res.json(updatedExercise);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server Error'});
    }
};

export const deleteExercise = async (req, res) => {
    const {id} = req.params;

    try {
        const deletedExercise = await exerciseModel.findByIdAndDelete(id);
        if(!deletedExercise){
            return res.status(404).json({message: 'Exercise not found!'})
        }

        res.json(deletedExercise);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Server Error'})
    }};