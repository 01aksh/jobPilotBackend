import mongoose from "mongoose";

const accountSetupSchema = new mongoose.Schema(
  {
    companyInfo: {
      logo: {
        type: String,
        required: [true, "Logo is required"],
      },
      banner: {
        type: String,
        required: [true, "Banner is required"],
      },
      name: {
        type: String,
        required: [true, "Company name is required"],
        trim: true,
      },
      about: {
        type: String,
        required: [true, "About field is required"],
        trim: true,
        maxlength: [1000, "About should be less than 1000 characters"],
      },
    },
    foundingInfo: {
      organizationType: {
        type: String,
        required: [true, "Organization type is required"],
      },
      industryType: {
        type: String,
        required: [true, "Industry type is required"],
      },
      teamSize: {
        type: String,
        required: [true, "Team size is required"],
      },
      establishedYear: {
        type: String,
        required: [true, "Established year is required"],
      },
      website: {
        type: String,
        required: [true, "Website is required"],
      },
      vision: {
        type: String,
        required: [true, "Vision is required"],
        maxlength: [1000, "Vision should be less than 1000 characters"],
      },
    },
    socialMediaInfo: {
      links: [
        {
          platform: { type: String, required: true },
          url: { type: String, required: true },
        },
      ],
    },
    contactInfo: {
      mapLocation: {
        type: String,
        required: [true, "Map location is required"],
      },
      phoneCode: {
        type: String,
        required: [true, "Phone code is required"],
      },
      phoneNumber: {
        type: String,
        required: [true, "Phone number is required"],
        match: [/^\d{7,15}$/, "Phone number must be between 7 and 15 digits"],
      },
      email: {
        type: String,
        required: [true, "Email is required"],
        lowercase: true,
        match: [/.+@.+\..+/, "Email must be valid"],
      },
    },
  },
  { timestamps: true }
);

export const AccountSetup = mongoose.model("AccountSetup", accountSetupSchema);
