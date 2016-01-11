function boo(bool) {
    if (typeof(bool) === "boolean") {
        // variable is a boolean
        return true;
    }
    return false;
}

boo(null);
