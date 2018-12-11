const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.website = !isEmpty(data.website) ? data.website : "";
  data.youtube = !isEmpty(data.youtube) ? data.youtube : "";
  data.twitter = !isEmpty(data.twitter) ? data.twitter : "";
  data.facebook = !isEmpty(data.facebook) ? data.facebook : "";
  data.linkedin = !isEmpty(data.linkedin) ? data.linkedin : "";

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle needs to between 2 and 40 Chars";
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Profile Handle is required";
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = "Profile Status is required";
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = "Profile Skills is required";
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "Invalid Website URL";
    }
  }
  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "Invalid youtube URL";
    }
  }
  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "Invalid twitter URL";
    }
  }
  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = "Invalid facebook URL";
    }
  }
  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "Invalid linkedin URL";
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "Invalid instagram URL";
    }
  }

  return { errors, isValid: isEmpty(errors) };
};
