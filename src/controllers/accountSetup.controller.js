import { AccountSetup } from "../models/accountSetup.model.js";

export const createAccountSetup = async (req, res) => {
  try {
    const {
      name,
      about,
      organizationType,
      industryType,
      teamSize,
      establishedYear,
      website,
      vision,
      socialMediaInfo,
      mapLocation,
      phoneCode,
      phoneNumber,
      email,
    } = req.body;

    const logo = req.files?.logo?.[0]?.filename;
    const banner = req.files?.banner?.[0]?.filename;

    if (!logo || !banner) {
      return res
        .status(400)
        .json({ message: "Logo and Banner images are required" });
    }

    const parsedLinks =
      typeof socialMediaInfo === "string"
        ? JSON.parse(socialMediaInfo).links
        : socialMediaInfo.links;

    const newAccount = new AccountSetup({
      companyInfo: {
        logo,
        banner,
        name,
        about,
      },
      foundingInfo: {
        organizationType,
        industryType,
        teamSize,
        establishedYear,
        website,
        vision,
      },
      socialMediaInfo: {
        links: parsedLinks,
      },
      contactInfo: {
        mapLocation,
        phoneCode,
        phoneNumber,
        email,
      },
    });

    await newAccount.save();

    res.status(201).json({
      message: "Employee Account setup saved successfully",
      data: newAccount,
    });
  } catch (error) {
    console.error("Create Account Error:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
