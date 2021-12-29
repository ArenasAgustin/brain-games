const validator = (solution: string, input: string): boolean => {
    if (solution === input) {
        return true;
    }
    return false;
}

export default validator;