const jobModel = require("../model/job.model");

const createJob = async (req, res) => {
  // To save the job in DB
  try {
    await jobModel.create(req.body); // Create a new doc in jobs collection
    console.log(req.body);
    res.json({
      success: true,
      message: "Job create successfully",
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Invalid data",
    });
  }
};

const listJob = async (req, res) => {
  const minSalary = req.query.minSalary || 0;
  console.log(minSalary);
  const jobs = await jobModel.find({
    salary: {
      $gte: minSalary,
    },
  });
  res.json({
    success: true,
    message: "List job api",
    result: jobs,
  });
};

const editJob = (req, res) => {
  res.json({
    success: true,
    message: "Edit job api",
  });
};

const deleteJob = (req, res) => {
  res.json({
    success: true,
    message: "Delete job api",
  });
};

const jobController = { createJob, listJob, editJob, deleteJob };

module.exports = jobController;
