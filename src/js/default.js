import Accordion from '../components/accordion/accordion';

class Default {
  constructor() {
    if (process.env.NODE_ENV != 'production')
      console.dir('@pttrn Development Mode');

    return this;
  }

  accordion() {
    return new Accordion();
  }
};

export default Default;