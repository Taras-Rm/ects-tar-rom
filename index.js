class ECTS {
  constructor(score) {
    this.score = score;
  }

  ectsFromScore() {
    if (this.score >= 90 && this.score <= 100) {
      return "A";
    } else if (this.score >= 82 && this.score <= 89) {
      return "B";
    } else if (this.score >= 74 && this.score <= 81) {
      return "C";
    } else if (this.score >= 65 && this.score <= 73) {
      return "D";
    } else if (this.score >= 60 && this.score <= 64) {
      return "E";
    } else if (this.score >= 0 && this.score <= 59) {
      return "F";
    } else {
      throw new Error("invalid score value");
    }
  }
}

module.exports = ECTS;
