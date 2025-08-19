const Student = require("../models/Student");
const resolvers = {
  Query: {
    students: async () => {
      return await Student.find();
    },

    student: async (_, { id }) => {
      return await Student.findById(id);
    },

    studentName: async (_, { name }) => {
      return await Student.find({ name });
    },

    studentSection: async (_, { section }) => {
      return await Student.find({ section });
    },

    studentBranch: async (_, { branch }) => {
      return await Student.find({ branch });
    },

    studentBranchSection: async (_, { section, branch }) => {
      return await Student.find({
        section: section,
        branch: branch,
      });
    },
  },

  Mutation: {
    insertStudent: async (_, { name, email, branch, section, batch }) => {
      try {
        const newStudent = await Student.create({
          name,
          email,
          branch,
          section,
          batch,
        });
        return newStudent;
      } catch (err) {
        console.error("Error creating student:", err);
        throw new Error("Failed to create student");
      }
    },

    updateStudent: async (_, { id, ...newUpdate }) => {
      try {
        const updatedStudent = await Student.findByIdAndUpdate(
          id,
          { $set: newUpdate }, 
          { new: true, runValidators: true } 
        );

        return updatedStudent; 
      } catch (err) {
        throw new Error(err.message);
      }
    },

    deleteStudent: async (_, { id }) => {
      return await Student.findByIdAndDelete(id);
    },
  },
};

module.exports = resolvers;
