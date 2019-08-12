export class SkillRanking {

    title: string;
   
    poor: number;
    fair: number;
    good: number;
    verygood: number;
    excellent: number;

    constructor(title) {
        this.title = title;
        this.poor = 55;
        this.fair = 75;
        this.good = 85;
        this.verygood = 95;
        this.excellent = 100;
    }

}
