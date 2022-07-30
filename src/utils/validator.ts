const validator = (solution: string, input: string): boolean => {
  if (solution === input && input && input.length > 0) {
    return true;
  }
  return false;
};

export default validator;
