import WorkModel from "./work.model.js";

async function createWork(req, res) {
    try {
        const work = req.body;
        const newWork = new WorkModel(work);
        await newWork.save();
        res.status(201).json(newWork);
    } catch (error) {
        res.status(500).json({ message: "Error creating work", error });
    }
}

async function getWork(req, res) {
    try {
        const work = await WorkModel.find({});
        if (work) {
            res.status(200).json(work);
        } else {
            res.status(404).json({ message: "Work not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error retrieving work", error });
    }
}

async function updateWork(req, res) {
    try {
        const workId = req.params.id;
        const workUpdates = req.body;
        const updatedWork = await WorkModel.findByIdAndUpdate(
            workId,
            workUpdates,
            {
                new: true,
            }
        );
        if (updatedWork) {
            res.status(200).json(updatedWork);
        } else {
            res.status(404).json({ message: "Work not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating work", error });
    }
}

async function deleteWork(req, res) {
    try {
        const workId = req.params.id;
        const deletedWork = await WorkModel.findByIdAndDelete(workId);
        if (deletedWork) {
            res.status(200).json({ message: "Work deleted successfully" });
        } else {
            res.status(404).json({ message: "Work not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting work", error });
    }
}

export const workController = {
    createWork,
    getWork,
    updateWork,
    deleteWork,
};
