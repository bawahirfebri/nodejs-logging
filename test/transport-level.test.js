import winston, { log } from "winston";

test('logger with transport level', () => {
    const logger = winston.createLogger({
        level: 'info',
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: 'log/aplication.log'
            }),
            new winston.transports.File({
                level: 'error',
                filename: 'log/aplication-error.log'
            })
        ]
    })

    logger.info('Hallo Info')
    logger.error('Hallo Error')
    logger.info('Hallo Info')
    logger.error('Hallo Error')
    logger.info('Hallo Info')
})