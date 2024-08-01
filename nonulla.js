let status = 'processing';
let message;

switch (status) {
    case 'success':
        message = 'Operation succeeded.';
        break;
    case 'error':
        message = 'An error occurred.';
        break;
    default:
        message = 'Operation status unknown.';
        break;
}

console.log(message); // Output: Operation status unknown.
