class RedisConnectionError extends Error {
    constructor (msg) {
        super(msg);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, RedisConnectionError);
        }
    }
}

module.exports = {
    RedisConnectionError
};