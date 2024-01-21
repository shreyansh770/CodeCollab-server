const validateUserInput = (...inputs) => {
    for (const input of inputs) {
      if (!input) {
        return { isValid: false, error: 'Please provide all required fields.' };
      }
    }
    return { isValid: true };
};

module.exports = validateUserInput
  