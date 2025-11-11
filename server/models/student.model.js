import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    admissionNumber: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
        trim: true,
      },
      middleName: {
        type: String,
        required: true,
        trim: true,
      },
      lastName: {
        type: String,
        required: true,
        trim: true,
      },
    },
    gender: {
      type: String,
      // required: true,
      enum: ["Male", "Female"],
    },
    admissionDate: {
      type: Date,
      // required: true,
    },
    address: {
      addressLine: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      postalCode: { type: String, required: true },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);
export default Student;