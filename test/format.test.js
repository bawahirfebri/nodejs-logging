import winston from "winston";

test('logging with format', () => {
    const logger = winston.createLogger({
        level: "info",
        format: winston.format.simple(),
        transports: [
            new winston.transports.Console({})
        ]
    })

    logger.info('Hello Format')
})

test('logging with printf format', () => {
    const logger = winston.createLogger({
        level: "info",
        format: winston.format.printf(log => {
            return `${new Date()} : ${log.level.toUpperCase()} : ${log.message}`
        }),
        transports: [
            new winston.transports.Console({})
        ]
    })

    logger.info('Hello Format')
})