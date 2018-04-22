function SpeakerService() {
  "ngInject";

  const speakers = [
    {
        id: 99,
        name: "Prosper Otemuyiwa",
        favConf: "Ruby Conf 2016",
        noOfConf: 13,
        favProgrammingQuote: "A C program is like a fast dance on a newly waxed dance floor by people carrying razors."
    },
    {
        id: 100,
        name: "Funsho Okubanjo",
        favConf: "Laracon 2016",
        noOfConf: 7,
        favProgrammingQuote: "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job."
    },
    {
        id: 101,
        name: "Chilezie Unachukwu",
        favConf: "ReactRally 2017",
        noOfConf: 19,
        favProgrammingQuote: "Good design adds value faster than it adds cost"
    },
    {
        id: 102,
        name: "Damilola Adekoya",
        favConf: "Codefest Russia 2012",
        noOfConf: 25,
        favProgrammingQuote: "Talk is cheap. Show me the code."
    },
  ];

  return {

    // Will retrieve our speakers list for displaying
    getAllSpeakers() {
      return speakers;
    },

    // Creating a Speaker entry based on user input.
    addASpeaker(speaker) {
      const {name, favConf, noOfConf, favProgrammingQuote } = speaker;

      const newSpeaker = { name, favConf, noOfConf, favProgrammingQuote };

      speakers.push(tempSpeaker);
    }
  }
}

export default SpeakerService;