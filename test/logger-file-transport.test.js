import winston from "winston";

test('create new logger with console & file transport', () => {
    const logger = winston.createLogger({
        level: 'info',
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: 'log/aplication.log'
            }),
            new winston.transports.File({
                filename: 'log/febri.log'
            }),
        ]
    })

    logger.info('Hello World')
    logger.info('Hello World')
    logger.info('Hello World')
    logger.info('Hello World')
})