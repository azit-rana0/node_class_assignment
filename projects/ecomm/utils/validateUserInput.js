function validateUserInput(data) {
  const errors = [];

  if (!data.firstName || data.firstName.trim() === "") {
    errors.push("First name is required");
  }

  if (!data.lastName || data.lastName.trim() === "") {
    errors.push("Last name is required");
  }

  if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.push("Valid email is required");
  }

  if (!data.mobNo || !/^[0-9]{10}$/.test(data.mobNo)) {
    errors.push("Mobile number must be 10 digits");
  }

  if (!data.password || data.password.length < 6) {
    errors.push("Password must be at least 6 characters");
  }

  if (!data.address || typeof data.address !== "object") {
    errors.push("Address is required and must be an object");
  } else {
    if (!data.address.addressLine1) {
      errors.push("Address Line 1 is required");
    }

    if (!data.address.city) {
      errors.push("City is required");
    }

    if (!data.address.state) {
      errors.push("State is required");
    }

    if (!data.address.pincode || !/^[0-9]{6}$/.test(data.address.pincode)) {
      errors.push("Pincode must be 6 digits");
    }
  }

  return errors;
}

module.exports = validateUserInput;
