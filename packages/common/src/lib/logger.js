import log from "loglevel";

const getDate = () => {
  return new Date().toJSON();
};

const logger = {
  trace(msg) {
    log.trace(`${getDate()} ${msg}`);
  },
  debug(msg) {
    log.debug(`${getDate()} ${msg}`);
  },
  info(msg) {
    log.info(`${getDate()} ${msg}`);
  },
  warn(msg) {
    log.warn(`${getDate()} ${msg}`);
  },
  error(msg) {
    log.error(`${getDate()} ${msg}`);
  },
};

export default logger;
