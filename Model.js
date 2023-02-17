const fs = require("fs");
const { EOL } = require("os");

class Model {
  constructor(topic) {
    this.topic = topic;
  }

  readAsk() {
    const ask = fs.readFileSync(
      `${__dirname}/topics/${this.topic}.txt`,
      "utf-8"
    );
		const arrAsk = ask.split(EOL);
		const arrQustion = arrAsk.filter((el,index) => index % 2 === 1);
		return arrQustion;
  }
	readAnswers (){
		const answer = fs.readFileSync(`${__dirname}/topics/${this.topic}.txt`, 'utf-8');
		const arrAnswer = answer.split(EOL);
		const arrAns = arrAnswer.filter((el,index) => index % 2 === 0);
		return arrAns;
	}
}

module.exports = Model;
